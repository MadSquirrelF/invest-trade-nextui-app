"use client";

import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import React, { memo } from "react";
import NextImage from "next/image";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { Chip } from "@nextui-org/chip";

import {
  AirDropIcon,
  EyeOpenedIcon,
  HeartFilledIcon,
} from "@/components/icons";
import { INew } from "@/types/new.interface";
import { getTimeDifferenceFromCreationDate } from "@/utils/Date";

interface INewCard {
  item: INew;
}

const NewsCard = memo((props: INewCard) => {
  const { item } = props;

  return (
    <Card shadow="sm">
      <CardBody className="h-72 p-0 relative">
        <Button
          isIconOnly
          className="absolute z-10 top-3 right-3"
          variant="faded"
        >
          <AirDropIcon />
        </Button>
        <NextImage
          alt={item.slug}
          className="object-cover rounded-lg"
          fill={true}
          src={`http://localhost:1418${item.poster}`}
        />
      </CardBody>
      <CardFooter className="flex h-60 w-full items-start flex-col gap-y-3 text-small justify-between">
        <div className="flex flex-row w-full justify-start items-center gap-x-3">
          <Avatar
            isBordered
            className="w-6 h-6 text-tiny"
            color="primary"
            src={`http://localhost:1418${item.author.avatarPath}`}
          />
          <span>{item.author.username}</span>
          <span>•</span>
          <span>{getTimeDifferenceFromCreationDate(item.createdAt)}</span>
          <span>•</span>
          <div className="flex text-primary flex-row gap-x-1 items-center">
            <EyeOpenedIcon />
            <span className="text-default-600 font-bold">{item.views}</span>
          </div>
        </div>

        <b className="text-xl text-left line-clamp-1">{item.title}</b>

        <p className="text-lg text-left text-default-600 line-clamp-3">
          {item.description}
        </p>

        <div className="flex flex-row justify-between w-full items-center">
          <Chip color="primary" variant="faded">
            {item.category}
          </Chip>
          <div className="flex text-danger flex-row gap-x-3">
            <HeartFilledIcon size={30} />
            <AvatarGroup isBordered color="danger" max={3} size="sm" total={10}>
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            </AvatarGroup>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
});

export default NewsCard;
