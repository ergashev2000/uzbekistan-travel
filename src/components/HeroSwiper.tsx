"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function HeroSwiper({
  data,
  setSelectedCardIndex,
  selectedCardIndex,
}: {
  data: any;
  setSelectedCardIndex?: any;
  selectedCardIndex?: any;
}) {
  const swiperRef = useRef<any | null>(null);


  const handleSelectImage = (index: number) => {
    setSelectedCardIndex(index);
    if (swiperRef.current) {
      swiperRef.current?.swiper.slideTo(index);
    }
  };

  return (
    <div className="w-1/2 h-screen  items-end hidden xl:flex">
      <Swiper
        ref={swiperRef}
        // loop={true}
        spaceBetween={25}
        slidesPerView={2.3}
        slidesPerGroup={1}
        modules={[FreeMode, Navigation, Thumbs]}
        watchSlidesProgress={true}
        className="hero-swiper w-full"
        navigation
      >
        {data?.map((item: any, index: any) => (
          <SwiperSlide key={item.id} className="pb-10 pt-24 ml-4 2xl:ml-5">
            <div
              onClick={() => handleSelectImage(index)}
              className={`cursor-pointer relative max-w-[400px] 2xl:h-40 h-32 ml-3 transition-all duration-500 rounded-xl overflow-hidden shadow-lg border-2  ${
                selectedCardIndex === index
                  ? "scale-[120%] border-[#FA7436]"
                  : "scale-100 border-transparent"
              }`}
            >
              <Image
                src={item.banner_img}
                alt="Image"
                width={1000}
                height={1000}
                className={`rounded h-full  w-full object-cover`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
