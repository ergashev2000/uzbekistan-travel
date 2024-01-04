"use client";

import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { ArrowIcon } from "@/assets/iconSvg";

export default function HeroContents() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const swiperRef = useRef<any | null>(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const handleSelectImage = (index: number) => {
    setSelectedCardIndex(index);
    if (swiperRef.current) {
      swiperRef.current?.swiper.slideTo(index);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const timeoutId = setTimeout(() => {
        videoElement.play().catch(error => {
          console.error("Error playing video:", error);
        });
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://firebasestorage.googleapis.com/v0/b/uzbekistan-travel-ea70f.appspot.com/o/thumb_1608_1920_0_0_0_auto.jpg?alt=media&token=0136cdea-c40c-45ed-803a-ac397dd43d52"
      >
        <source
          src="https://firebasestorage.googleapis.com/v0/b/uzbekistan-travel-ea70f.appspot.com/o/Invest-in-Tashkent.mp4?alt=media&token=6116453d-c9fc-4cf5-959e-7363472d64f0"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="w-1/2 px-10 relative">
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          slidesPerView={1}
          slidesPerGroup={1}
          modules={[FreeMode, Navigation, Thumbs]}
          direction={"vertical"}
          className="max-h-screen"
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="h-full flex flex-col justify-center gap-20 pt-20 items-center">
                <div className="relative text-gray-100 space-y-6">
                  <h3 className="text-[60px] font-semibold">Tabiat</h3>
                  <p className="text-xl ">
                    Xushmanzara tog‘lar, gullagan vodiylar, jazirama cho‘llar,
                    daryolar va zilol ko‘llar - bu go‘zallikning barchasidan
                    O‘zbekistonda bahramand bo‘lishingiz mumkin!
                  </p>
                  <button
                    className="hover:bg-blue-800 px-5 py-2 rounded-full text-lg font-semibold flex items-center gap-2 shadow  border-blue-800 border-2 transition-all duration-500 [&>span]:hover:ml-5"
                    onClick={() => handleSelectImage(index+1)}
                  >
                    Batafsil
                    <span className="transition-all duration-500">
                      <ArrowIcon />
                    </span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
