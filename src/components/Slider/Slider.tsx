"use client";

import React from "react";
import { Card } from "@nextui-org/card";
import { CSSTransition } from "react-transition-group";
import { Button } from "@nextui-org/button";
import { StaticImageData } from "next/image";

import { ArrowLeftIcon, ArrowRightIcon } from "../icons";

import { useSlider } from "./useSlider";
import { Slide } from "./Slide";

export interface SlideSchema {
  _id: string;
  title: string;
  poster: StaticImageData;
  description: string;
  link: string;
}

interface SliderProps {
  slides: SlideSchema[];
}

export const Slider = (props: SliderProps) => {
  const { slides } = props;
  const { slideIn, index, isNext, isPrev, handleArrowClick } = useSlider(
    slides.length,
  );

  return (
    <Card isBlurred className="relative rounded-2xl w-full">
      <CSSTransition
        unmountOnExit
        classNames="slide-animation"
        in={slideIn}
        timeout={300}
      >
        <Slide slide={slides[index]} />
      </CSSTransition>
      {isPrev && (
        <Button
          isIconOnly
          className="absolute right-20 bottom-5 z-10"
          color="primary"
          onPress={() => handleArrowClick("prev")}
        >
          <ArrowLeftIcon />
        </Button>
      )}
      {isNext && (
        <Button
          isIconOnly
          className="absolute right-5 bottom-5 z-10"
          color="primary"
          onPress={() => handleArrowClick("next")}
        >
          <ArrowRightIcon />
        </Button>
      )}
    </Card>
  );
};
