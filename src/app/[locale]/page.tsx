import { useTranslations } from "next-intl";
import { Card, CardBody, CardFooter } from "@nextui-org/card";

import BreadcrumbsClient, {
  IBreadcrumbItem,
} from "@/components/BreadcrumbsClient/BreadcrumbsClient";
import {
  BgMain,
  CalculatorMain,
  FurnituraIcon,
  HomeIcon,
  KomplektIcon,
  NewspaperMain,
  OborudovanIcon,
  PVHIcon,
  WindowMain,
} from "@/components/icons";
import { subtitle, title } from "@/components/primitives";
import { Slider, SlideSchema } from "@/components/Slider/Slider";
import ManhattanBg from "@/assets/images/bg-hm.jpg";
import AcademBg from "@/assets/images/plan1.webp";
import PremiumBg from "@/assets/images/XXL.webp";

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
      text: t("breadcrumbs.Main page"),
      href: "/",
    },
  ];

  return (
    <section className="flex relative flex-col items-start justify-center gap-5 py-8 md:py-10">
      <BreadcrumbsClient items={breadcrumbs} size="lg" />

      <div className="w-full flex flex-row gap-x-8">
        <Slider slides={testSlide} />
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
            <Card isBlurred isPressable className="w-full h-[340px]">
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
        <div className="flex flex-col gap-y-8 w-full">
          <div className="flex flex-row gap-x-8">
            <Card isBlurred isPressable className="w-full h-[340px] relative">
              <CardBody>
                <FurnituraIcon
                  className="absolute bottom-2 right-5"
                  size={150}
                />
                <h2
                  className={title({
                    color: "default",
                    size: "sm",
                    bold: "bold",
                  })}
                >
                  Фурнитура
                </h2>
                <p
                  className={subtitle({
                    size: "sm",
                  })}
                >
                  Это система деталей, которые удерживают раму, позволяют
                  открывать и закрывать ее, а также обеспечивают ее плотное
                  прилегание к профилю.
                </p>
              </CardBody>
            </Card>
            <Card isBlurred isPressable className="w-full relative">
              <CardBody>
                <PVHIcon className="absolute bottom-2 right-2" size={150} />
                <h2
                  className={title({
                    color: "default",
                    size: "sm",
                    bold: "bold",
                  })}
                >
                  ПВХ Профиль
                </h2>
                <p
                  className={subtitle({
                    size: "sm",
                  })}
                >
                  Это основной элемент пластиковых окон и дверей, изготовленный
                  из поливинилхлорида методом экструзии, с заданными формами и
                  размерами сечения.
                </p>
              </CardBody>
            </Card>
          </div>
          <div className="flex  flex-row gap-x-8">
            <Card isBlurred isPressable className="w-full h-[340px] relative">
              <CardBody>
                <OborudovanIcon
                  className="absolute bottom-2 right-2"
                  size={150}
                />
                <h2
                  className={title({
                    color: "default",
                    size: "sm",
                    bold: "bold",
                  })}
                >
                  Оборудование
                </h2>
                <p
                  className={subtitle({
                    size: "sm",
                  })}
                >
                  Все необходимое для производства пластиковых окон.
                </p>
              </CardBody>
            </Card>
            <Card isBlurred isPressable className="w-full relative">
              <CardBody>
                <KomplektIcon
                  className="absolute bottom-2 right-2"
                  size={150}
                />
                <h2
                  className={title({
                    color: "default",
                    size: "sm",
                    bold: "bold",
                  })}
                >
                  Комплектующие
                </h2>
                <p
                  className={subtitle({
                    size: "sm",
                  })}
                >
                  Данный раздел находится в стадии разработки.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
