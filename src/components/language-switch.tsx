"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { useRouter } from "next/navigation";
import { FC, useTransition } from "react";
import { SwitchProps } from "@nextui-org/switch";
import { Button } from "@nextui-org/button";
import { useLocale, useTranslations } from "next-intl";

import { EnIcon, LanguageIcon, RusIcon } from "./icons";

export interface LanguageSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const LanguageSwitch: FC<LanguageSwitchProps> = ({
  className,
  classNames,
}) => {
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("Switcher");
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (language: string) => {
    startTransition(() => {
      // Assuming you have a route that changes the language
      router.replace(`/${language}`);
    });
  };

  return (
    <Dropdown isDisabled={isPending}>
      <DropdownTrigger>
        <Button isIconOnly aria-label="Change Language" variant="faded">
          <LanguageIcon className="text-default-500" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dropdown menu language"
        disabledKeys={localActive === "ru" ? ["ru"] : ["en"]}
        variant="faded"
      >
        <DropdownItem
          key="ru"
          shortcut="⌘N"
          startContent={<RusIcon height={20} width={36} />}
          onClick={() => onSelectChange("ru")}
        >
          {t("russian")}
        </DropdownItem>
        <DropdownItem
          key="en"
          shortcut="⌘C"
          startContent={<EnIcon height={20} width={36} />}
          onClick={() => onSelectChange("en")}
        >
          {t("english")}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
