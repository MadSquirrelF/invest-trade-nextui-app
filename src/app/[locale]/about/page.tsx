"use client";

import { useTranslations } from "next-intl";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

import BreadcrumbsClient, {
  IBreadcrumbItem,
} from "@/components/BreadcrumbsClient/BreadcrumbsClient";
import { AboutIcon, HomeIcon, WorldMapBg } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";
import "swiper/css";
import "swiper/css/pagination";
import PartnersSwiper from "@/components/PartnersSwiper/PartnersSwiper";

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

      <div className="relative mt-10 w-full flex flex-col">
        <WorldMapBg className="absolute z-[1] top-0 left-0 w-full" />
        <div className="w-full z-10 flex flex-row items-center pl-[10%] justify-start">
          <Card isBlurred className="p-5">
            <CardBody className="h-[500px] justify-center items-start">
              <div className="flex flex-col gap-y-7 max-w-[750px]">
                <h1
                  className={title({
                    size: "lg",
                    bold: "bold",
                  })}
                >
                  Делаем окна, которые служат{" "}
                  <span
                    className={title({
                      size: "lg",
                      bold: "bold",
                      color: "primary",
                    })}
                  >
                    до 50 лет
                  </span>
                </h1>
                <p className={subtitle()}>
                  ИНВЕСТ-ТРЕЙД – это поставщик оконного профиля из ПВХ и
                  алюминия, оконной фурнитуры и комплектующих, оборудования для
                  производства окон.
                </p>
              </div>

              <div className="flex mt-6 flex-row gap-x-3">
                <Button color="primary" size="lg">
                  Подробнее о компании
                </Button>
                <Button size="lg" variant="faded">
                  Наш ассортимент
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="w-full z-10 flex flex-row justify-center items-center mt-20 gap-x-5">
          <Card className="w-full">
            <CardBody>
              <h3
                className={title({
                  size: "sm",
                  bold: "bold",
                })}
              >
                <span
                  className={title({
                    size: "sm",
                    bold: "bold",
                    color: "primary",
                  })}
                >
                  2008
                </span>{" "}
                год
              </h3>
              <p className={subtitle()}>Дата открытия компании в Челябинске!</p>
            </CardBody>
          </Card>
          <Card className="w-full">
            <CardBody>
              <h3
                className={title({
                  size: "sm",
                  bold: "bold",
                })}
              >
                <span
                  className={title({
                    size: "sm",
                    bold: "bold",
                    color: "primary",
                  })}
                >
                  50 +
                </span>{" "}
                лет
              </h3>
              <p className={subtitle()}>Гарантированный срок службы профиля!</p>
            </CardBody>
          </Card>
          <Card className="w-full">
            <CardBody>
              <h3
                className={title({
                  size: "sm",
                  bold: "bold",
                })}
              >
                <span
                  className={title({
                    size: "sm",
                    bold: "bold",
                    color: "primary",
                  })}
                >
                  100
                </span>{" "}
                процентов
              </h3>
              <p className={subtitle()}>Качество товаров и услуг!!</p>
            </CardBody>
          </Card>
          <Card className="w-full">
            <CardBody>
              <h3
                className={title({
                  size: "sm",
                  bold: "bold",
                })}
              >
                <span
                  className={title({
                    size: "sm",
                    bold: "bold",
                    color: "primary",
                  })}
                >
                  1000 +
                </span>{" "}
                клиентов
              </h3>
              <p className={subtitle()}>Довольных нашей работой!!</p>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="flex flex-row justify-between items-start py-14">
        <h2
          className={title({
            bold: "bold",
            size: "lg",
          })}
        >
          О компании
        </h2>

        <div className="flex flex-col gap-y-5 max-w-[50%]">
          <p className={subtitle()}>
            Уже более 10 лет мы помогаем создать уют в домах наших клиентов. С
            каждым годом мы улучшаем свой сервис на основе ваших отзывов, и
            делаем все, чтобы вам было приятно с нами работать.
          </p>
          <p className={subtitle()}>
            В нашем уютном коллективе только истинные специалисты, которые
            подберут идеально решение и расшифруют все технические нюансы на
            понятном вам языке.
          </p>

          <p className={subtitle()}>
            Для наших клиентов мы, предлагаем полный комплекс услуг: начиная от
            поставки и наладки оборудования до снабжения всеми необходимыми для
            производства материалами и комплектующими, включая отработанную
            технологию производства.
          </p>
        </div>
      </div>
      <Divider />

      <div className="flex flex-row justify-between items-start py-14">
        <h2
          className={title({
            bold: "bold",
            size: "lg",
          })}
        >
          Наша миссия
        </h2>

        <div className="flex flex-col gap-y-5 max-w-[50%]">
          <p className={subtitle()}>
            “Обеспечить оконных производителей надежными и долговечными
            комплектующими, способствуя созданию комфортных и безопасных условий
            для жизни людей.”
          </p>
        </div>
      </div>

      <Divider />

      <PartnersSwiper />
    </>
  );
}
