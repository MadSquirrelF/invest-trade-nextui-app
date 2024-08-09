/* eslint-disable react/display-name */
/* eslint-disable jsx-a11y/no-autofocus */
"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Checkbox } from "@nextui-org/checkbox";
import { Divider } from "@nextui-org/divider";
import { memo, useState } from "react";
import React from "react";
import { useTranslations } from "next-intl";

import { LanguageSwitch } from "./language-switch";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  VkIcon,
  GithubIcon,
  TelegramIcon,
  InstagramIcon,
  SearchIcon,
  Logo,
  MailIcon,
  LockIcon,
  YandexIcon,
  EyeOpenedIcon,
  EyeClosedIcon,
} from "@/components/icons";

export const Navbar = memo(() => {
  const t = useTranslations("Navbar");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar shouldHideOnScroll maxWidth="full" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo height={35} width={175} />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {t(item.label)}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <VkIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <TelegramIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <InstagramIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <LanguageSwitch />
        <NavbarItem className="hidden md:flex">
          <Button color="primary" onPress={onOpen}>
            Войти
          </Button>
        </NavbarItem>
        <Modal
          isOpen={isOpen}
          placement="top-center"
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-y-6">
                  <div className="flex flex-col gap-y-1">
                    <p className="font-semibold text-2xl">Вход на сайт</p>
                    <p className="text-default-600 text-sm">
                      Для того, чтобы перейти к личным данным нужно войти
                    </p>
                  </div>

                  <div className="flex flex-col gap-y-2">
                    <button
                      className="flex min-h-11 rounded-lg bg-[#07f] gap-x-4 hover:opacity-80 text-base active:opacity-70 py-2 px-3 flex-row text-white font-medium w-full items-center justify-center bg-primary"
                      type="button"
                    >
                      <VkIcon size={28} />
                      Войти через VK ID
                    </button>
                    <button
                      className="flex min-h-11 rounded-lg text-white gap-x-4 text-base flex-row hover:opacity-90 active:opacity-80 py-2 px-3 font-medium w-full items-center justify-center bg-black"
                      type="button"
                    >
                      <YandexIcon size={28} />
                      Войти через Яндекс ID
                    </button>
                  </div>

                  <Divider className="my-1" />
                </ModalHeader>

                <ModalBody>
                  <form className="flex flex-col gap-y-6">
                    <Input
                      autoFocus
                      isRequired
                      label="Почта"
                      labelPlacement="outside"
                      placeholder="Введите почту"
                      size="lg"
                      startContent={
                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      type="email"
                      variant="flat"
                    />
                    <Input
                      isRequired
                      endContent={
                        <button
                          aria-label="toggle password visibility"
                          className="focus:outline-none"
                          type="button"
                          onClick={toggleVisibility}
                        >
                          {isVisible ? (
                            <EyeOpenedIcon className="text-2xl text-default-400 pointer-events-none" />
                          ) : (
                            <EyeClosedIcon className="text-2xl text-default-400 pointer-events-none" />
                          )}
                        </button>
                      }
                      label="Пароль"
                      labelPlacement="outside"
                      placeholder="Введите пароль"
                      size="lg"
                      startContent={
                        <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      type={isVisible ? "text" : "password"}
                      variant="flat"
                    />
                  </form>

                  <div className="flex py-2 px-1 justify-between">
                    <Checkbox
                      classNames={{
                        label: "text-small",
                      }}
                    >
                      Запомнить меня
                    </Checkbox>
                    <Link
                      className="font-semibold"
                      color="primary"
                      href="#"
                      size="sm"
                    >
                      Забыли пароль?
                    </Link>
                  </div>
                </ModalBody>
                <ModalFooter className="w-full flex flex-col gap-2">
                  <Button color="primary" size="lg" onPress={onClose}>
                    Войти
                  </Button>
                  <div className="flex flex-row w-full gap-x-4 items-center justify-center">
                    <p>Еще нет аккаунта?</p>
                    <Link
                      className="font-semibold"
                      color="primary"
                      href="#"
                      size="sm"
                    >
                      Зарегистрироваться
                    </Link>
                  </div>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
});
