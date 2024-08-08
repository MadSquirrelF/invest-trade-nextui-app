import React, { memo } from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Variants, motion } from "framer-motion";

import { subtitle, title } from "../primitives";
import { BoxIcon, DeliveryIcon, PlaneIcon, StarFlagIcon } from "../icons";

import { WorldBg } from "@/assets/icons/Wolrd";
import { WarehouseBg } from "@/assets/icons/Warehouse";
import { DeliveryBg } from "@/assets/icons/Delivery";
import { QualityBg } from "@/assets/icons/Quality";

const cardVariantsLeft: Variants = {
  offscreen: {
    y: 300,
    x: -300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const cardVariantsRight: Variants = {
  offscreen: {
    y: 300,
    x: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const TimelineVerticalAbout = memo(() => {
  return (
    <div className="relative w-full after:content-[''] overflow-hidden mt-4 py-14 after:absolute after:w-1 after:h-full after:bg-primary after:rounded-lg after:top-0 after:left-1/2 after:ml-[-3px] after:anima">
      <motion.div
        className="py-3 px-14 relative  w-1/2 mb-11 left-0"
        initial="offscreen"
        viewport={{ once: true, amount: 0.8 }}
        whileInView="onscreen"
      >
        <div className="rounded-full p-3 absolute w-16 h-16 right-[-32px] z-10 flex flex-row top-8 items-center justify-center outline outline-4 outline-primary bg-default-50">
          <DeliveryIcon size={40} />
        </div>
        <motion.div variants={cardVariantsLeft}>
          <Card className="py-5 px-8 relative rounded-lg">
            <CardBody>
              <DeliveryBg className="text-primary" />
            </CardBody>

            <CardFooter className="flex flex-col items-start gap-y-7">
              <h2
                className={title({
                  size: "sm",
                  bold: "bold",
                })}
              >
                Доставка
              </h2>
              <p className={subtitle()}>
                Наша компания заботится о своих клиентах и предлагает различные
                способы доставки. Вы можете выбрать стандартную доставку,
                которая осуществляется в течение нескольких дней, или
                экспресс-доставку, если Вам необходимо получить окна как можно
                быстрее. Также доступна вечерняя доставка и самовывоз со склада.
                Наши опытные специалисты аккуратно и бережно доставят Ваши окна,
                чтобы они прослужили Вам долгие годы и обеспечивали комфорт в
                доме или офисе. Выбирайте нас, и мы поможем Вам создать светлое
                и теплое пространство!
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
      <motion.div
        className="py-3 px-14 relative w-1/2 mb-11 left-1/2"
        initial="offscreen"
        viewport={{ once: true, amount: 0.8 }}
        whileInView="onscreen"
      >
        <div className="rounded-full p-3 absolute w-16 h-16 z-10 left-[-32px] flex flex-row top-8 items-center justify-center outline outline-4 outline-primary bg-default-50">
          <BoxIcon size={40} />
        </div>
        <motion.div variants={cardVariantsRight}>
          <Card className="py-5 px-8 relative rounded-lg">
            <CardBody>
              <WarehouseBg className="text-primary" height={500} />
            </CardBody>

            <CardFooter className="flex flex-col items-start gap-y-7">
              <h2
                className={title({
                  size: "sm",
                  bold: "bold",
                })}
              >
                Всегда под рукой
              </h2>
              <p className={subtitle()}>
                У нас на складе всегда в наличии широкий ассортимент оконных
                конструкций различных размеров и конфигураций. Мы следим за тем,
                чтобы наши клиенты могли быстро и удобно подобрать подходящие
                окна для своего дома или офиса.
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
      <motion.div
        className="py-3 px-14 relative  w-1/2 mb-11 left-0"
        initial="offscreen"
        viewport={{ once: true, amount: 0.8 }}
        whileInView="onscreen"
      >
        <div className="rounded-full p-3 absolute w-16 h-16 right-[-32px] z-10 flex flex-row top-8 items-center justify-center outline outline-4 outline-primary bg-default-50">
          <StarFlagIcon size={40} />
        </div>
        <motion.div variants={cardVariantsLeft}>
          <Card className="py-5 px-8 relative rounded-lg">
            <CardBody>
              <QualityBg className="text-primary" height={500} />
            </CardBody>

            <CardFooter className="flex flex-col items-start gap-y-7">
              <h2
                className={title({
                  size: "sm",
                  bold: "bold",
                })}
              >
                Полная комплектация
              </h2>
              <p className={subtitle()}>
                Представляем вашему вниманию полную комплектацию для окон,
                которая включает все необходимые элементы для качественной
                установки и эксплуатации. В нашем ассортименте вы найдете:
              </p>
              <ul className="gap-y-5">
                <li className={subtitle()}>
                  <strong>Оконные рамы:</strong> разнообразные материалы и
                  конструкции для любого стиля.
                </li>
                <li className={subtitle()}>
                  <strong>Стеклопакеты:</strong> энергоэффективные решения для
                  сохранения тепла и снижения шума.
                </li>
                <li className={subtitle()}>
                  <strong>Фурнитура:</strong> надежные механизмы, обеспечивающие
                  долговечность и удобство использования.
                </li>
                <li className={subtitle()}>
                  <strong>Уплотнители:</strong> для защиты от сквозняков и
                  повышения теплоизоляции.
                </li>
                <li className={subtitle()}>
                  <strong>Аксессуары:</strong> от москитных сеток до
                  подоконников, чтобы завершить ваш проект.
                </li>
              </ul>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
      <motion.div
        className="py-3 px-14 relative w-1/2 mb-11 left-1/2"
        initial="offscreen"
        viewport={{ once: true, amount: 0.8 }}
        whileInView="onscreen"
      >
        <div className="rounded-full p-3 absolute w-16 z-10 h-16 left-[-32px] flex flex-row top-8 items-center justify-center outline outline-4 outline-primary bg-default-50">
          <PlaneIcon size={40} />
        </div>
        <motion.div variants={cardVariantsRight}>
          <Card className="py-5 px-8 relative rounded-lg">
            <CardBody>
              <WorldBg className="text-primary" height={500} />
            </CardBody>

            <CardFooter className="flex flex-col items-start gap-y-7">
              <h2
                className={title({
                  size: "sm",
                  bold: "bold",
                })}
              >
                По всей России!
              </h2>
              <p className={subtitle()}>
                Мы рады предложить вам удобную и быструю доставку по всей
                территории России. Независимо от того, где вы находитесь, мы
                гарантируем, что ваш заказ будет доставлен в кратчайшие сроки и
                в идеальном состоянии. Наша команда тщательно упаковывает каждую
                посылку, чтобы обеспечить безопасность и сохранность продукции.
                <br />
                <br />
                Кроме того, мы активно работаем над расширением наших услуг и в
                ближайшее время планируем начать доставку в другие страны.
                Следите за обновлениями, чтобы первыми узнать о новых
                возможностях и предложениях! Ваш комфорт и удовлетворение — наш
                приоритет, и мы стремимся сделать покупки с нами максимально
                удобными.
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
});

export default TimelineVerticalAbout;
