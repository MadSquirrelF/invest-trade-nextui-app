export const PUBLIC_URL = {
  root: (url = "") => `${url ? url : ""}`,

  home: () => PUBLIC_URL.root("/"),
  about: () => PUBLIC_URL.root("/about"),
  signup: () => PUBLIC_URL.root("/signup"),
  news: () => PUBLIC_URL.root("/news"),
  products: () => PUBLIC_URL.root("/products"),
  info: () => PUBLIC_URL.root("/info"),

  new: (slug = "") => PUBLIC_URL.root(`/news/${slug}`),
  product: (slug = "") => PUBLIC_URL.root(`/products/${slug}`),
};

export const DASHBOARD_URL = {
  root: (url = "") => `/dashboard${url ? "/" + url : ""}`,

  profile: () => DASHBOARD_URL.root("/profile"),
  favorites: () => DASHBOARD_URL.root("/favorites"),
};

export const ADMIN_URL = {
  root: (url = "") => `/manage/me${url ? "/" + url : ""}`,

  home: () => DASHBOARD_URL.root(),
};
