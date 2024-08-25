import { __API__ } from "@/constants/constants";

export const SERVER_URL = `${__API__}/api`;

export const API_URL = {
  root: (url = "") => `${url ? url : ""}`,

  auth: (url = "") => API_URL.root(`/auth${url}`),
  users: (url = "") => API_URL.root(`/users${url}`),
  products: (url = "") => API_URL.root(`/products${url}`),
  news: (url = "") => API_URL.root(`/news${url}`),
  info: (url = "") => API_URL.root(`/info${url}`),
};
