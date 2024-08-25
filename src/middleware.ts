import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

import { defaultLocale, localePrefix, locales } from "./config";
import { ADMIN_URL, DASHBOARD_URL, PUBLIC_URL } from "./config/url.config";

const intlMiddleware = createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
});

export async function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get("refreshToken")?.value;
  const accessToken = request.cookies.get("accessToken")?.value;

  // Массив локалей
  const locales = ["ru", "en"];

  // Проверка на страницы аутентификации и администрирования с учетом локалей
  const isAuthPage = locales.some(
    (locale) => request.nextUrl.pathname === `/${locale}/signup`,
  );
  const isAdminPage = locales.some((locale) =>
    request.nextUrl.pathname.startsWith(`/${locale}${ADMIN_URL.root()}`),
  );

  // Если пользователь на странице входа и уже аутентифицирован
  if (isAuthPage && refreshToken && accessToken) {
    return NextResponse.redirect(new URL(DASHBOARD_URL.profile(), request.url));
  }

  const isProtectedRoute = locales.some(
    (locale) =>
      request.nextUrl.pathname.startsWith(`/${locale}/dashboard`) ||
      request.nextUrl.pathname.startsWith(`/${locale}/manage/me`),
  );

  // Если пользователь не аутентифицирован и пытается получить доступ к защищённым маршрутам
  if (!refreshToken && (isAdminPage || isProtectedRoute)) {
    if (isAdminPage) {
      return NextResponse.rewrite(new URL("/not-found", request.url));
    }

    return NextResponse.redirect(new URL(PUBLIC_URL.signup(), request.url));
  }

  // Выполняем intlMiddleware для обработки локалей
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/",
    "/(ru|en)/:path*",
    "/((?!_next|_vercel|.*\\..*).*)",
    "/(ru|en)/dashboard/:path*",
    "/(ru|en)/manage/me/:path*",
    "/(ru|en)/signup",
  ],
};
