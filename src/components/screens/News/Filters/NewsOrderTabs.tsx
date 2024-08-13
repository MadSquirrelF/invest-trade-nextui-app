"use client";
import { Tab, Tabs } from "@nextui-org/tabs";
import React, { memo } from "react";

import { AscOrderByIcon, DescOrderByIcon } from "@/components/icons";
import { useNewStore } from "@/store/news";

const NewsOrderTabs = memo(() => {
  const orderByValue = useNewStore((state) => state.orderBy);
  const setOrderBy = useNewStore((state) => state.setOrderBy);

  return (
    <Tabs
      color="primary"
      selectedKey={orderByValue}
      size="lg"
      variant="solid"
      onSelectionChange={(key) => {
        if (key === "asc" || key === "desc") {
          setOrderBy(key);
        }
      }}
    >
      <Tab key="desc" title={<DescOrderByIcon />} />
      <Tab key="asc" title={<AscOrderByIcon />} />
    </Tabs>
  );
});

export default NewsOrderTabs;
