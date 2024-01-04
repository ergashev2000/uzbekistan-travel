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

  //   const handleTouchEnd = () => {
  //     // if (thumbsSwiper) {
  //     //   setSelectedCardIndex(thumbsSwiper.realIndex);
  //     // }
  //   };

  return (
    <div className="w-1/2 h-full flex items-end">
      <Swiper
        ref={swiperRef}
        onSwiper={handleSetThumb}
        // loop={true}
        spaceBetween={25}
        slidesPerView={3}
        slidesPerGroup={1}
        modules={[FreeMode, Navigation, Thumbs]}
        watchSlidesProgress={true}
        // onTouchEnd={handleTouchEnd}
        className="hero-swiper"
        navigation
      >
        {[...Array(5)].map((_, index) => (
          <SwiperSlide
            key={index}
            className="cursor-pointer py-8 pl-5"
            onClick={() => handleSelectImage(index)}
          >
            <div
              className={`relative transition-all duration-500 rounded-lg overflow-hidden shadow-lg  ${
                selectedCardIndex === index
                  ? "scale-[120%] border border-blue-500"
                  : "scale-100"
              }`}
            >
              <Image
                src={`https://picsum.photos/id/${index + 100}/500/600`}
                alt="Image"
                width={100}
                height={300}
                className={`rounded w-full h-[300px] object-cover`}
              />

              <button className="absolute top-2 right-2 border bg-gray-100 rounded-full p-1 flex items-center justify-center">
                <PlayIcon />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
