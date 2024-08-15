"use client";

import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import React, { ChangeEvent, memo, useEffect, useRef } from "react";

import { NewsIcon } from "@/components/icons";
import { useNewStore } from "@/store/news";

const NewsSearch = memo(() => {
  const setSearchTerm = useNewStore((state) => state.setSearchTerm);
  const searchTerm = useNewStore((state) => state.searchTerm);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Input
      ref={inputRef}
      aria-label="Search"
      className="w-1/3"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-base",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          S
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
