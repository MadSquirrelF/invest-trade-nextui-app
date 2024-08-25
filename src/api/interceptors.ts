import axios, { CreateAxiosDefaults } from "axios";
import Cookies from "js-cookie";

import { errorCatch, getContentType } from "./api.helper";

import { AuthService } from "@/services/auth/auth.service";
import { removeTokensStorage } from "@/services/auth/auth.helper";
import { SERVER_URL } from "@/config/api.config";

const options: CreateAxiosDefaults = {
  baseURL: SERVER_URL,
  headers: getContentType(),
};

export const axiosClassic = axios.create(options);

export const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use((config) => {
  const accessToken = Cookies.get("accessToken");

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axiosWithAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response.status === 401 ||
        errorCatch(error) === `jwt expired` ||
        `jwt must be provided`) &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await AuthService.getNewTokens();

        return await axiosWithAuth.request(originalRequest);
        // eslint-disable-next-line @typescript-eslint/no-shadow
      } catch (error) {
        if (errorCatch(error) === `jwt expired`) removeTokensStorage();
      }
    }
    throw error;
  },
);

export default axiosWithAuth;
