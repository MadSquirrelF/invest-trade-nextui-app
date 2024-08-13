"use client";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import React, { memo } from "react";

import { useNewStore } from "@/store/news";
import { DateIcon, EyeOpenedIcon, MessageTextIcon } from "@/components/icons";

const NewsSortDropdown = memo(() => {
  const sortByValue = useNewStore((state) => state.sortBy);
  const setSortBy = useNewStore((state) => state.setSortBy);

  return (
    <Dropdown size="lg">
      <DropdownTrigger>
        <Button
          className="text-primary font-bold"
          size="lg"
          startContent={
            <span className="text-default-600 fon">Сортировка:</span>
          }
          variant="bordered"
        >
          {sortByValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu disallowEmptySelection selectedKeys={sortByValue}>
        <DropdownItem
          key="view"
          startContent={<EyeOpenedIcon />}
          onClick={() => setSortBy("view")}
        >
          Просмотрам
        </DropdownItem>
        <DropdownItem
          key="createdAt"
          startContent={<DateIcon />}
          onClick={() => setSortBy("createdAt")}
        >
          Дата публикации
        </DropdownItem>
        <DropdownItem
          key="title"
          startContent={<MessageTextIcon />}
          onClick={() => setSortBy("title")}
        >
          Названию
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
});

export default NewsSortDropdown;
