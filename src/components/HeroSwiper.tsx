"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { PlayIcon } from "@/assets/iconSvg";

export default function HeroSwiper({
  data,
  setSelectedCardIndex,
  selectedCardIndex,
}: {
  data: any;
  setSelectedCardIndex?: any;
  selectedCardIndex?: any;
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef<any | null>(null);

  const handleSetThumb = (e: any) => setThumbsSwiper(e);

  const handleSelectImage = (index: number) => {
    setSelectedCardIndex(index);
    if (swiperRef.current) {
      swiperRef.current?.swiper.slideTo(index);
    }
  };

  return (
    <div className="w-1/2 h-screen flex items-end">
      <Swiper
        ref={swiperRef}
        onSwiper={handleSetThumb}
        // loop={true}
        spaceBetween={25}
        slidesPerView={2.3}
        slidesPerGroup={1}
        modules={[FreeMode, Navigation, Thumbs]}
        watchSlidesProgress={true}
        className="hero-swiper w-full"
        navigation
      >
        {data.banner_data.map((item: any, index: any) => (
          <SwiperSlide key={item.id} className="pb-10 pt-24 ml-4">
            <div
              onClick={() => handleSelectImage(index)}
              className={`cursor-pointer relative max-w-[400px] ml-3 transition-all duration-500 rounded-lg overflow-hidden shadow-lg border-4  ${
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
                className={`rounded w-full h-[200px] object-cover`}
              />

              <button className="absolute top-2 right-2 border text-black border-black rounded-full w-7 h-7 flex items-center justify-center">
                <PlayIcon />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
