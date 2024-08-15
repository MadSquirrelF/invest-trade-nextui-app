"use client";

import React, { memo } from "react";

import NewsCard from "./NewsCard";
import NewsCardSkeleton from "./NewsCardSkeleton";

import NoConnection from "@/components/shared/NoConnection/NoConnection";
import EmptyData from "@/components/shared/EmptyData/EmptyData";
import { INew } from "@/types/new.interface";

const getSkeletons = () =>
  new Array(4).fill(0).map((item, index) => <NewsCardSkeleton key={index} />);

interface NewsListProps {
  isLoading: boolean;
  news: INew[] | undefined;
  error: Error | null;
  isError: boolean;
}

const NewsList = memo((props: NewsListProps) => {
  const { news, isLoading, isError, error } = props;

  if (isLoading) {
    return (
      <div className="gap-6 relative w-full mt-6 grid grid-cols-2 sm:grid-cols-4">
        {getSkeletons()}
      </div>
    );
  }

  if (isError && error) {
    return <NoConnection error={error.message} />;
  }

  if (!news || news.length === 0) {
    return <EmptyData />;
  }

  return (
    <div className="gap-6 relative w-full mt-6 grid grid-cols-2 sm:grid-cols-4">
      {news.map((item) => (
        <NewsCard key={item.slug} item={item} />
      ))}
    </div>
  );
});

export default NewsList;
