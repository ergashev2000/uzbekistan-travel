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

export default function HeroSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
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
        slidesPerView={3}
        slidesPerGroup={1}
        modules={[FreeMode, Navigation, Thumbs]}
        watchSlidesProgress={true}
        className="hero-swiper"
        navigation
      >
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index} className="pb-10 pt-24 pl-5">
            <div
              onClick={() => handleSelectImage(index)}
              className={`cursor-pointer relative transition-all duration-500 rounded-lg overflow-hidden shadow-lg border-4 max-w-xs  ${
                selectedCardIndex === index
                  ? "scale-[120%] border-[#FA7436]"
                  : "scale-100 border-transparent"
              }`}
            >
              <Image
                src={`https://picsum.photos/id/${index + 13}/250/400`}
                alt="Image"
                width={1000}
                height={1000}
                className={`rounded w-full h-[300px] object-cover`}
              />

              <button className="absolute top-2 right-2 border text-white border-gray-100 rounded-full w-7 h-7 flex items-center justify-center">
                <PlayIcon />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
