"use client";

import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Button } from "@nextui-org/button";

import { HeartFilledIcon, MacoLogo, RingerLogo, SchternLogo } from "../icons";
import { subtitle, title } from "../primitives";

const PartnersSwiper = memo(() => {
  return (
    <div className="flex flex-col w-full gap-y-3 mt-9">
      <div className="block">
        <h3
          className={title({
            bold: "bold",
            color: "primary",
          })}
        >
          Наши партнеры
        </h3>
        <p className={subtitle()}>
          Мы работаем с крупнейшими компаниями нашей страны, и благодаря их
          опыту ежедневно совершенствуем свои решения
        </p>

        <Button
          className="mt-4 font-bold"
          color="danger"
          size="lg"
          startContent={<HeartFilledIcon />}
          variant="flat"
        >
          Ваша компания
        </Button>
      </div>

      <Swiper
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        slidesPerView={3}
        spaceBetween={30}
      >
        <SwiperSlide>
          <MacoLogo />
        </SwiperSlide>
        <SwiperSlide>
          <RingerLogo />
        </SwiperSlide>
        <SwiperSlide>
          <SchternLogo />
        </SwiperSlide>
        <SwiperSlide>
          <MacoLogo />
        </SwiperSlide>
        <SwiperSlide>
          <RingerLogo />
        </SwiperSlide>
        <SwiperSlide>
          <SchternLogo />
        </SwiperSlide>
      </Swiper>
    </div>
  );
});

export default PartnersSwiper;
