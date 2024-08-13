import { useTranslations } from "next-intl";

import BreadcrumbsClient, {
  IBreadcrumbItem,
} from "@/components/BreadcrumbsClient/BreadcrumbsClient";
import { HomeIcon, NewsIcon } from "@/components/icons";
import NewsContent from "@/components/screens/News/NewsContent";
import NewsSearch from "@/components/screens/News/Filters/NewsSearch";
import { subtitle, title } from "@/components/primitives";
import NewsYearTabs from "@/components/screens/News/Filters/NewsYearTabs";
import NewsGridTabs from "@/components/screens/News/Filters/NewsGridTabs";
import NewsOrderTabs from "@/components/screens/News/Filters/NewsOrderTabs";
import NewsSortDropdown from "@/components/screens/News/Filters/NewsSortDropdown";

export default function NewsPage() {
  const t = useTranslations("Index");

  const breadcrumbs: IBreadcrumbItem[] = [
    {
      startContent: <HomeIcon size={20} />,
      text: t("breadcrumbs.Main page"),
      href: "/",
    },
    {
      startContent: <NewsIcon size={20} />,
      text: t("breadcrumbs.News"),
      href: "/news",
    },
  ];

  return (
    <>
      <BreadcrumbsClient items={breadcrumbs} size="lg" />

      <div className="flex flex-row items-end w-full justify-between">
        <div className="flex flex-col gap-y-2">
          <h2 className={title({ bold: "bold" })}>Новости и акции</h2>
          <p className={subtitle({ size: "sm" })}>
            Здесь вы найдете актуальную информацию о новых продуктах, акциях,
            мероприятиях и полезные советы по выбору и установке окон.
          </p>
        </div>

        <NewsSearch />
      </div>

      <div className="flex flex-row items-center w-full justify-between mt-10">
        <div className="flex flex-row gap-x-3">
          <NewsYearTabs />
          <NewsGridTabs />
          <NewsOrderTabs />
        </div>

        <NewsSortDropdown />
      </div>

      <NewsContent />
    </>
  );
}
