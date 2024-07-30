import { useTranslations } from "next-intl";

import { subtitle, title } from "@/components/primitives";

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");

  return (
    <div>
      <h1 className={title()}>{t("title")}</h1>
      <h2 className={subtitle({ class: "mt-4" })}>{t("description")}</h2>
    </div>
  );
}
