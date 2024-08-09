"use client";

import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import { Tab, Tabs } from "@nextui-org/tabs";
import React from "react";

import { subtitle, title } from "@/components/primitives";
import {
  DateIcon,
  EyeOpenedIcon,
  GridIcon,
  LikeCategorytIcon,
  MessageTextIcon,
  NewsIcon,
  RowIcon,
  StarFlagIcon,
} from "@/components/icons";

const NewsFilters = () => {
  return (
    <>
      <div className="flex flex-row items-end w-full justify-between">
        <div className="flex flex-col gap-y-2">
          <h2
            className={title({
              bold: "bold",
            })}
          >
            Новости и акции
          </h2>
          <p
            className={subtitle({
              size: "sm",
            })}
          >
            Здесь вы найдете актуальную информацию о новых продуктах, акциях,
            мероприятиях и полезные советы по выбору и установке окон.
          </p>
        </div>

        <Input
          aria-label="Search"
          className="w-1/3"
          classNames={{
            inputWrapper: "bg-default-100",
            input: "text-base",
          }}
          endContent={
            <Kbd className="hidden lg:inline-block" keys={["command"]}>
              P
            </Kbd>
          }
          labelPlacement="outside"
          placeholder="Искать новость..."
          size="lg"
          startContent={
            <NewsIcon className="text-base text-primary pointer-events-none flex-shrink-0" />
          }
          type="search"
        />
      </div>

      <div className="flex flex-row items-center w-full justify-between mt-10">
        <div className="flex flex-row gap-x-3">
          <Tabs color="primary" size="lg" variant="solid">
            <Tab
              key="За все время"
              title={
                <div className="flex items-center space-x-2">
                  <span>За все время</span>
                </div>
              }
            />
            <Tab
              key="2024"
              title={
                <div className="flex items-center space-x-2">
                  <span>2024</span>
                </div>
              }
            />
            <Tab
              key="2023"
              title={
                <div className="flex items-center space-x-2">
                  <span>2023</span>
                </div>
              }
            />
            <Tab
              key="2022"
              title={
                <div className="flex items-center space-x-2">
                  <span>2022</span>
                </div>
              }
            />
            <Tab
              key="2021"
              title={
                <div className="flex items-center space-x-2">
                  <span>2021</span>
                </div>
              }
            />
          </Tabs>
          <Tabs color="primary" size="lg" variant="solid">
            <Tab key="Row" title={<RowIcon />} />
            <Tab key="Grid" title={<GridIcon />} />
          </Tabs>
        </div>

        <Dropdown size="lg">
          <DropdownTrigger>
            <Button
              className="text-primary"
              size="lg"
              startContent={
                <span className="text-default-600 fon">Сортировка:</span>
              }
              variant="bordered"
            >
              просмотрам
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem startContent={<EyeOpenedIcon />}>
              Просмотрам
            </DropdownItem>
            <DropdownItem startContent={<DateIcon />}>
              Дата публикации
            </DropdownItem>
            <DropdownItem startContent={<StarFlagIcon />}>Рейтинг</DropdownItem>
            <DropdownItem startContent={<MessageTextIcon />}>
              Количество комментариев
            </DropdownItem>
            <DropdownItem startContent={<LikeCategorytIcon />}>
              Количество лайков
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  );
};

export default NewsFilters;
