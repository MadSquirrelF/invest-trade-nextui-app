import { LocalePrefix } from "next-intl/routing";

export const defaultLocale = "ru" as const;
export const locales = ["ru", "en"] as const;

export const localePrefix: LocalePrefix<typeof locales> = "always";
