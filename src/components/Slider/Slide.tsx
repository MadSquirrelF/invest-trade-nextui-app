/* eslint-disable react/display-name */
"use client";

import React, { memo } from "react";
import NextImage from "next/image";
import { Button } from "@nextui-org/button";

import { SlideSchema } from "./Slider";

interface SlideProps {
  slide: SlideSchema;
}

export const Slide = memo((props: SlideProps) => {
  const { slide } = props;

  return (
    <div
      className="relative
    rounded-xl
    h-[50vh]
    w-full
    before:content-['']
    before:rounded-xl
    before:w-full
    before:h-full
    before:absolute
    before:top-0
    before:left-0
    before:z-[1]
    before:bg-shadow-gradient-light
    dark:before:bg-shadow-gradient-dark"
    >
      <NextImage
        alt={slide.description}
        className="rounded-3xl object-cover"
        fill={true}
        src={slide.poster.src}
        title={slide.title}
      />

      <h3 className="absolute z-10 top-5 left-5 font-bold">ИНВЕСТ-ТРЕЙД</h3>

      <div className="block z-10 absolute bottom-5 left-5">
        <div className="flex flex-col gap-4 max-w-[450px] mb-5">
          <h4 className="font-bold text-lg">{slide.title}</h4>
          <p className="text-base">{slide.description}</p>
        </div>

        <Button color="primary">Смотреть</Button>
      </div>
    </div>
  );
});
