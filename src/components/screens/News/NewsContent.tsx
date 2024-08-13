"use client";

import React, { memo } from "react";
import { Pagination } from "@nextui-org/pagination";

import { useNew } from "./useNew";
import NewsList from "./NewsList/NewsList";

import { useNewStore } from "@/store/news";

const NewsContent = memo(() => {
  const { isLoading, data, error, isError } = useNew();

  const { setCurrentPage } = useNewStore();

  return (
    <>
      <NewsList
        error={error}
        isError={isError}
        isLoading={isLoading}
        news={data?.data}
      />

      <Pagination
        isCompact
        showControls
        initialPage={data?.currentPage}
        size="lg"
        total={data?.totalPages || 10}
        onChange={setCurrentPage}
      />
    </>
  );
});

export default NewsContent;
