"use client";

import { Tab, Tabs } from "@nextui-org/tabs";
import React from "react";

import { GridIcon, RowIcon } from "@/components/icons";

const NewsGridTabs = () => {
  return (
    <Tabs color="primary" size="lg" variant="solid">
      <Tab key="Row" title={<RowIcon />} />
      <Tab key="Grid" title={<GridIcon />} />
    </Tabs>
  );
};

export default NewsGridTabs;
