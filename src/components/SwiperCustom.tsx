"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { defoultBreakpoints } from "@/util/breackPoints";

type SwiperProps = {
  children: React.ReactNode;
  slidesNumber?: number;
  between?: number;
  loop?: boolean;
  effect?: string;
  autoplay?: number;
  pagination?: boolean;
  className?: string;
  navigation?: boolean;
};

const CustomSwiper = ({
  children,
  slidesNumber = 1,
  between = 10,
  loop = false,
  effect = "slide",
  autoplay,
  pagination = false,
  navigation = false,
}: SwiperProps) => {
  return (
    <Swiper
      modules={[
        Autoplay,
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        EffectFade,
        EffectCoverflow,
      ]}
      coverflowEffect={
        effect === "coverflow"
          ? {
              rotate: 50,
              stretch: 100,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }
          : {}
      }
      grabCursor={effect === "coverflow"}
      centeredSlides={effect === "coverflow"}
      slidesPerView={slidesNumber}
      spaceBetween={between}
      loop={!!loop}
      effect={effect}
      autoplay={!!autoplay && { delay: autoplay, disableOnInteraction: false }}
      pagination={pagination && { clickable: true }}
      navigation={
        navigation && {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }
      }
      breakpoints={defoultBreakpoints}
    >
      {React.Children.map(children, child => (
        <SwiperSlide className="py-5">{child}</SwiperSlide>
      ))}
      {navigation ? (
        <>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </>
      ) : null}
    </Swiper>
  );
};

export default CustomSwiper;
