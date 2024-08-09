import { useTranslations } from "next-intl";

import BreadcrumbsClient, {
  IBreadcrumbItem,
} from "@/components/BreadcrumbsClient/BreadcrumbsClient";
import { HomeIcon, NewsIcon } from "@/components/icons";
import NewsList from "@/components/screens/News/NewsList/NewsList";
import NewsFilters from "@/components/screens/News/Filters/NewsFilters";

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

  // const news: INew[] = [
  //   {
  //     title: "Новые энергоэффективные окна: сэкономьте на отоплении!",
  //     subtitle:
  //       "Мы рады представить нашу новую линейку энергоэффективных окон, которые помогут вам снизить затраты на отопление. Узнайте больше о преимуществах и технологиях, которые стоят за нашими продуктами.",
  //     _id: "1",
  //     slug: "test1",
  //     category: "Акции",
  //     views: 10,
  //     likes: 10,
  //     poster: testBg.src,
  //     createdAt: "",
  //     blocks: [],
  //   },
  //   {
  //     title: "Новые энергоэффективные окна: сэкономьте на отоплении!",
  //     subtitle:
  //       "Мы рады представить нашу новую линейку энергоэффективных окон, которые помогут вам снизить затраты на отопление. Узнайте больше о преимуществах и технологиях, которые стоят за нашими продуктами.",
  //     _id: "2",
  //     slug: "test2",
  //     category: "Акции",
  //     views: 10,
  //     likes: 10,
  //     poster: testBg.src,
  //     createdAt: "",
  //     blocks: [],
  //   },
  //   {
  //     title: "Новые энергоэффективные окна: сэкономьте на отоплении!",
  //     subtitle:
  //       "Мы рады представить нашу новую линейку энергоэффективных окон, которые помогут вам снизить затраты на отопление. Узнайте больше о преимуществах и технологиях, которые стоят за нашими продуктами.",
  //     _id: "3",
  //     slug: "test3",
  //     category: "Акции",
  //     views: 10,
  //     likes: 10,
  //     poster: testBg.src,
  //     createdAt: "",
  //     blocks: [],
  //   },
  //   {
  //     title: "Новые энергоэффективные окна: сэкономьте на отоплении!",
  //     subtitle:
  //       "Мы рады представить нашу новую линейку энергоэффективных окон, которые помогут вам снизить затраты на отопление. Узнайте больше о преимуществах и технологиях, которые стоят за нашими продуктами.",
  //     _id: "4",
  //     slug: "test4",
  //     category: "Акции",
  //     views: 10,
  //     likes: 5,
  //     poster: testBg.src,
  //     createdAt: "",
  //     blocks: [],
  //   },
  // ];

  return (
    <>
      <BreadcrumbsClient items={breadcrumbs} size="lg" />

      <NewsFilters />

      <NewsList />

      {/* <Pagination isCompact showControls initialPage={1} size="lg" total={10} /> */}
    </>
  );
}
