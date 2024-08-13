"use client";

import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import React, { ChangeEvent, memo } from "react";

import { NewsIcon } from "@/components/icons";
import { useNewStore } from "@/store/news";

const NewsSearch = memo(() => {
  const setSearchTerm = useNewStore((state) => state.setSearchTerm);
  const searchTerm = useNewStore((state) => state.searchTerm);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
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
      value={searchTerm}
      onChange={handleChange}
    />
  );
});

export default NewsSearch;
