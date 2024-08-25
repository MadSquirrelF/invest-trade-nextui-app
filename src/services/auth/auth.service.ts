import Cookies from "js-cookie";

import { removeTokensStorage, saveToStorage } from "./auth.helper";

import { axiosClassic } from "@/api/interceptors";
import { API_URL } from "@/config/api.config";
import { IAuthResponse } from "@/types/auth.interface";
import { getContentType } from "@/api/api.helper";

export const AuthService = {
  async login(email: string, password: string) {
    const response = await axiosClassic.post<IAuthResponse>(
      API_URL.auth("/login"),
      {
        email,
        password,
      },
    );

    if (response.status === 200 && response.data.accessToken)
      saveToStorage(response.data);

    return response;
  },

  logout() {
    removeTokensStorage();
    localStorage.removeItem(`user`);
  },

  async getNewTokens() {
    const refreshToken = Cookies.get(`refreshToken`);
    const response = await axiosClassic.post<IAuthResponse>(
      API_URL.auth("/login/access-token"),
      { refreshToken },
      { headers: getContentType() },
    );

    if (response.data.accessToken) saveToStorage(response.data);

    return response;
  },
};
