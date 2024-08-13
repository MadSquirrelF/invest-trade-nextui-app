"use client";

import { Tab, Tabs } from "@nextui-org/tabs";
import React, { memo } from "react";

const NewsYearTabs = memo(() => {
  return (
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
  );
});

export default NewsYearTabs;
