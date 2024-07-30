import { useTranslations } from "next-intl";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import NextImage from "next/image";

import BreadcrumbsClient, {
  IBreadcrumbItem,
} from "@/components/BreadcrumbsClient/BreadcrumbsClient";
import {
  BgMain,
  CalculatorMain,
  HomeIcon,
  NewspaperMain,
  WindowMain,
} from "@/components/icons";
import { subtitle, title } from "@/components/primitives";
import { Slider, SlideSchema } from "@/components/Slider/Slider";
import ManhattanBg from "@/assets/images/bg-hm.jpg";
import AcademBg from "@/assets/images/plan1.webp";
import PremiumBg from "@/assets/images/XXL.webp";
import BgBlock from "@/assets/images/test2.png";

const testSlide: SlideSchema[] = [
  {
    _id: "1",
    title: "ЖК МАНХЕТТЕН",
    description:
      "В ЦЕЛОМ ЖК «МАНХЭТТЕН» ПРЕДПОЛАГАЕТ 15 ЖИЛЫХ ДОМОВ. МЫ ПОМОГАЕМ ЖИЛЬЦАМ И ЗАСТРОЙЩИКАМ С УСТАНОВКОЙ ОКОН.",
    poster: ManhattanBg,
    link: "gfdgsdfg",
  },
  {
    _id: "2",
    title: "ПАРКОВЫЙ ПРЕМИУМ",
    description:
      "ПЛАНИРУЕТСЯ К ПОСТРОЙКЕ БОЛЬШАЯ ДЕТСКАЯ ПЛОЩАДКА С ИГРОВЫМИ ФОРМАМИ. ЧЕРЕЗ НАШИ ОКНА РОДИТЕЛИ СМОГУТ ОТЧЕТЛИВО НАБЛЮДАТЬ ЗА ИГРОЙ СВОИХ ДЕТЕЙ.",
    poster: PremiumBg,
    link: "gfdgsdfg",
  },
  {
    _id: "3",
    title: "АКАДЕМ-РИВЕРСАЙД",
    description:
      "НОВЫЙ МИКРОРАЙОН УДАЧНО РАСПОЛОЖЕН ВДОЛЬ УНИВЕРСИТЕТСКОЙ НАБЕРЕЖНОЙ ВБЛИЗИ СОСНОВОГО БОРА. НАШИ НОВЫЕ И НАДЕЖНЫЕ ОКНА ОБЕСПЕЧАТ ЖИЛЬЦАМ ПОТРЯСАЮЩИЙ ВИД.",
    poster: AcademBg,
    link: "gfdgsdfg",
  },
];

export default function Home() {
  const t = useTranslations("Index");

  const breadcrumbs: IBreadcrumbItem[] = [
    {
      startContent: <HomeIcon size={20} />,
      text: t("breadcrumbs"),
      href: "/",
    },
  ];

  return (
    <section className="flex relative flex-col items-start justify-center gap-5 py-8 md:py-10">
      <BreadcrumbsClient items={breadcrumbs} size="lg" />

      <div className="w-full flex flex-row gap-x-8">
        <Slider slides={testSlide} />
        <Card isBlurred className="w-1/3">
          <CardBody>
            <NextImage
              alt={"Big Building calculations windows"}
              className="object-cover"
              fill={true}
              src={BgBlock}
              title={"Big City live"}
            />
          </CardBody>
        </Card>
      </div>

      <div className="relative w-full flex flex-row gap-x-8">
        <BgMain
          className="flex-none absolute opacity-65"
          height={"100%"}
          width={"100%"}
        />
        <div className="w-full flex flex-col gap-y-8">
          <Card isBlurred>
            <CardBody>
              <div className="flex flex-row p-2">
                <div className="flex flex-col gap-y-2">
                  <h1
                    className={title({
                      color: "primary",
                      size: "lg",
                      bold: "bold",
                    })}
                  >
                    Ваш партнер в оконном бизнесе!
                  </h1>
                  <p className={subtitle()}>
                    Мы являемся официальным поставщиком оборудования и
                    материалов для производства пластиковых и алюминиевых
                    конструкций
                  </p>
                </div>
                <WindowMain className="flex-none" height={300} width={300} />
              </div>
            </CardBody>
          </Card>
          <div className="flex flex-row gap-x-8 w-full">
            <Card isBlurred isPressable className="w-full h-[300px]">
              <CardBody className="gap-y-2">
                <h2
                  className={title({
                    color: "primary",
                    size: "sm",
                    bold: "bold",
                  })}
                >
                  Онлайн калькулятор
                </h2>
                <p className={subtitle()}>
                  Узнайте точную стоимость установки окон с учетом ваших
                  потребностей и бюджета!
                </p>
              </CardBody>
              <CardFooter>
                <CalculatorMain
                  className="flex-none absolute right-2 bottom-[-20px]"
                  height={140}
                  width={150}
                />
              </CardFooter>
            </Card>

            <Card
              isBlurred
              isPressable
              className="w-full border-none bg-background/60"
            >
              <CardBody>
                <h2
                  className={title({
                    color: "default",
                    size: "sm",
                    bold: "bold",
                  })}
                >
                  Последние новости
                </h2>
                <p className={subtitle()}>09.01.2024</p>
              </CardBody>
              <CardFooter>
                <NewspaperMain
                  className="flex-none absolute right-0 bottom-[-30px]"
                  height={173}
                  width={209}
                />
              </CardFooter>
            </Card>
          </div>
        </div>

        <Card isBlurred>
          <CardBody>
            <div className="flex flex-row p-2">
              <div className="flex flex-col gap-y-2">
                <h1
                  className={title({
                    color: "blue",
                  })}
                >
                  Ваш партнер в оконном бизнесе!
                </h1>
                <p className={subtitle()}>
                  Мы являемся официальным поставщиком оборудования и материалов
                  для производства пластиковых и алюминиевых конструкций
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
