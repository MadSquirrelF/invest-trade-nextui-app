import React from "react";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";

import { InstagramIcon, Logo, MailIcon, TelegramIcon, VkIcon } from "../icons";
import { subtitle, title } from "../primitives";

import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer className="container w-full flex flex-col justify-between mx-auto max-w-full px-6 flex-grow">
      <div className="flex flex-row">
        <div className="flex flex-col w-full">
          <div className="flex flex-row border-t-1 h-full border-gray-600 gap-x-14 border-r-1 justify-between items-center p-12">
            <Logo className="flex-none" height={50} width={300} />

            <p className="text-lg">
              “ Обеспечить оконных производителей надежными и долговечными
              комплектующими, способствуя созданию комфортных и безопасных
              условий для жизни людей. ”
            </p>
          </div>
          <div className="flex flex-row h-full w-full p-12 border-t-1 border-b-1 border-r-1 border-gray-600">
            <div className="flex flex-col w-full">
              <p className={subtitle()}>Ресурсы</p>

              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={""}
                size="lg"
              >
                Почему инвест-трейд?
              </Link>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={""}
                size="lg"
              >
                Блог
              </Link>
            </div>

            <div className="flex flex-col w-full">
              <p className={subtitle()}>Компания</p>

              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={""}
                size="lg"
              >
                О компании
              </Link>

              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={""}
                size="lg"
              >
                Магазин
              </Link>

              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={""}
                size="lg"
              >
                FAQ
              </Link>

              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={""}
                size="lg"
              >
                Контакты
              </Link>

              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={""}
                size="lg"
              >
                Новости
              </Link>

              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={""}
                size="lg"
              >
                Отзывы
              </Link>
            </div>

            <div className="flex flex-col w-full">
              <p className={subtitle()}>Социальные сети</p>

              <div className="flex flex-row gap-x-4">
                <Link
                  isExternal
                  aria-label="Twitter"
                  href={siteConfig.links.twitter}
                >
                  <VkIcon className="text-default-500" size={40} />
                </Link>
                <Link
                  isExternal
                  aria-label="Discord"
                  href={siteConfig.links.discord}
                >
                  <TelegramIcon className="text-default-500" size={40} />
                </Link>
                <Link
                  isExternal
                  aria-label="Github"
                  href={siteConfig.links.github}
                >
                  <InstagramIcon className="text-default-500" size={40} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full border-t-1 border-b-1 p-12 gap-y-5 border-gray-600">
          <h1 className={title()}>
            Есть вопросы? Не стесняйтесь написать нам!
          </h1>
          <h2 className={subtitle()}>
            Мы рады, что вы решили связаться с нами. Наша команда всегда на
            связи для ответа. Мы свяжемся с вами как можно скорее после
            получения вашей почты.
          </h2>

          <Card>
            <CardHeader>
              <p className="text-md">Почта</p>
            </CardHeader>
            <CardBody className="gap-y-3">
              <Input
                aria-label="Email input contact"
                placeholder="Enter your email..."
                startContent={
                  <MailIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
                }
              />

              <Checkbox defaultSelected>
                Продолжая, вы соглашаетесь с обработкой персональных данных и
                пользовательским соглашением
              </Checkbox>
            </CardBody>

            <CardFooter>
              <Button color="primary">Отправить</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="flex flex-row gap items-center gap-x-5 py-2">
        <p className="text-foreground">© 2024. Все права защищены</p>

        <Link
          className={clsx(
            linkStyles({ color: "foreground" }),
            "data-[active=true]:text-primary data-[active=true]:font-medium",
          )}
          color="foreground"
          href={""}
          size="lg"
        >
          Политика конфиденциальности
        </Link>

        <Link
          className={clsx(
            linkStyles({ color: "foreground" }),
            "data-[active=true]:text-primary data-[active=true]:font-medium",
          )}
          color="foreground"
          href={""}
          size="lg"
        >
          Условия использования
        </Link>

        <Link
          className={clsx(
            linkStyles({ color: "foreground" }),
            "data-[active=true]:text-primary data-[active=true]:font-medium",
          )}
          color="foreground"
          href={""}
          size="lg"
        >
          Политика Cookie
        </Link>

        <Link
          className={clsx(
            linkStyles({ color: "foreground" }),
            "data-[active=true]:text-primary data-[active=true]:font-medium",
          )}
          color="foreground"
          href={""}
          size="lg"
        >
          Поддержка
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
