import { useTranslations } from "next-intl";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

import BreadcrumbsClient, {
  IBreadcrumbItem,
} from "@/components/BreadcrumbsClient/BreadcrumbsClient";
import { AboutIcon, HomeIcon } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";

export default function AboutPage() {
  const t = useTranslations("Index");

  const breadcrumbs: IBreadcrumbItem[] = [
    {
      startContent: <HomeIcon size={20} />,
      text: t("breadcrumbs.Main page"),
      href: "/",
    },
    {
      startContent: <AboutIcon size={20} />,
      text: t("breadcrumbs.About company"),
      href: "/",
    },
  ];

  return (
    <>
      <BreadcrumbsClient items={breadcrumbs} size="lg" />

      <div className="w-full h-screen flex flex-row items-center justify-center">
        <div className="w-1/2">
          <div className="flex flex-col  gap-y-4 max-w-[750px]">
            <h1 className={title()}>Делаем окна, которые служат до 50 лет</h1>
            <p className={subtitle()}>
              ИНВЕСТ-ТРЕЙД – это поставщик оконного профиля из ПВХ и алюминия,
              оконной фурнитуры и комплектующих, оборудования для производства
              окон.
            </p>
          </div>

          <Button color="primary">Подробнее о компании</Button>
        </div>
        <div className="relative grid grid-cols-2 grid-rows-2 gap-4">
          <Image
            isBlurred
            alt="NextUI Album Cover"
            src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
            width={240}
          />
          <Image
            isBlurred
            alt="NextUI Album Cover"
            src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
            width={240}
          />
          <Image
            isBlurred
            alt="NextUI Album Cover"
            src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
            width={240}
          />
          <Image
            isBlurred
            alt="NextUI Album Cover"
            src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
            width={240}
          />
        </div>
      </div>
    </>
  );
}
