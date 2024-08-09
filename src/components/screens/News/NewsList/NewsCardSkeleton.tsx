import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

const NewsCardSkeleton = () => {
  return (
    <Card shadow="sm">
      <CardBody className="p-0 h-72 relative">
        <Skeleton className="rounded-lg h-full w-full" />
      </CardBody>
      <CardFooter className="flex h-60 w-full flex-col gap-y-3 text-small justify-between">
        <div className="flex flex-row justify-start w-full items-center gap-x-3">
          <Skeleton className="w-6 h-6 rounded-full" />
          <Skeleton className="w-36 h-4 rounded-lg" />
          <span>•</span>
          <Skeleton className="w-36 h-4 rounded-lg" />
        </div>

        <Skeleton className="w-full h-5 rounded-lg" />

        <div className="flex flex-col w-full gap-y-2">
          <Skeleton className="w-full h-2 rounded-lg" />
          <Skeleton className="w-full h-2 rounded-lg" />
          <Skeleton className="w-full h-2 rounded-lg" />
          <Skeleton className="w-full h-2 rounded-lg" />
          <Skeleton className="w-full h-2 rounded-lg" />
        </div>

        <div className="flex flex-row justify-between w-full items-center">
          <Skeleton className="w-24 h-8 rounded-xl" />
          <div className="flex text-danger flex-row gap-x-3">
            <Skeleton className="w-24 h-8 rounded-xl" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NewsCardSkeleton;
