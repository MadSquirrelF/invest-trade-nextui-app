"use client";

import { Tab, Tabs } from "@nextui-org/tabs";
import React, { memo } from "react";

import { useNewStore } from "@/store/news";

const NewsYearTabs = memo(() => {
  const date = useNewStore((state) => state.date);
  const setDate = useNewStore((state) => state.setDate);

  return (
    <Tabs
      color="primary"
      selectedKey={date}
      size="lg"
      variant="solid"
      onSelectionChange={(key) => {
        if (
          key === "all" ||
          key === "2024" ||
          key === "2023" ||
          key === "2022" ||
          key === "2021"
        ) {
          setDate(key);
        }
      }}
    >
      <Tab
        key="all"
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
  );
});

export default NewsYearTabs;
