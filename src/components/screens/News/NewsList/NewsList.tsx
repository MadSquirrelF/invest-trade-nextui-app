"use client";

import React from "react";

import NewsCard from "./NewsCard";
import { useNew } from "./useNew";
import NewsCardSkeleton from "./NewsCardSkeleton";

const getSkeletons = () =>
  new Array(8).fill(0).map((item, index) => <NewsCardSkeleton key={index} />);

const NewsList = () => {
  const { handleSearch, isLoading, searchTerm, news, isError } = useNew();

  return (
    <div className="gap-6 w-full mt-6 grid grid-cols-2 sm:grid-cols-4">
      {isLoading ? (
        getSkeletons()
      ) : !news ? (
        <div>Ошибка</div>
      ) : (
        news.map((item) => <NewsCard key={item.slug} item={item} />)
      )}
    </div>
  );
};

export default NewsList;
