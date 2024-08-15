import axios from "axios";
import Cookies from "js-cookie";

import { errorCatch, getContentType } from "./api.helper";

import { __API__ } from "@/constants/constants";
import { AuthService } from "@/services/auth/auth.service";
import { removeTokensStorage } from "@/services/auth/auth.helper";

export const axiosClassic = axios.create({
  baseURL: __API__,
  headers: getContentType(),
});

export const instance = axios.create({
  baseURL: __API__,
  headers: getContentType(),
});

instance.interceptors.request.use((config) => {
  const accessToken = Cookies.get("accessToken");

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

instance.interceptors.response.use(
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

        return await instance.request(originalRequest);
        // eslint-disable-next-line @typescript-eslint/no-shadow
      } catch (error) {
        if (errorCatch(error) === `jwt expired`) removeTokensStorage();
      }
    }
    throw error;
  },
);

export default instance;
