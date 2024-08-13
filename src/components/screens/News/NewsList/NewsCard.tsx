"use client";

import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import React, { memo } from "react";
import NextImage from "next/image";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { Chip } from "@nextui-org/chip";

import { AirDropIcon, HeartFilledIcon } from "@/components/icons";
import { INew } from "@/types/new.interface";

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
          src={`http://localhost:1418${item.preview_img}`}
        />
      </CardBody>
      <CardFooter className="flex h-60 w-full items-start flex-col gap-y-3 text-small justify-between">
        <div className="flex flex-row w-full justify-start items-center gap-x-3">
          <Avatar
            isBordered
            className="w-6 h-6 text-tiny"
            color="primary"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
          <span>Инвест-трейд</span>
          <span>•</span>
          <span>12 minutes ago</span>
        </div>

        <b className="text-xl text-left line-clamp-1">{item.title}</b>

        <p className="text-lg text-left text-default-600 line-clamp-3">
          {item.subtitle}
        </p>

        <div className="flex flex-row justify-between w-full items-center">
          <Chip color="primary" variant="faded">
            Акции
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
