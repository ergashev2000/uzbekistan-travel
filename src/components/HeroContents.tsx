"use client";

import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { ArrowIcon, BgElement } from "@/assets/iconSvg";
import Image from "next/image";

export default function HeroContents({
  data,
  selectedIndex,
}: {
  data: any;
  selectedIndex: any;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const swiperRef = useRef<any | null>(null);

  const handleSelectImage = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current?.swiper.slideTo(index);
    }
  };

  useEffect(() => {
    handleSelectImage(selectedIndex);
  }, [selectedIndex]);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const timeoutId = setTimeout(() => {
        videoElement.play().catch(error => {
          console.error("Error playing video:", error);
        });
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  useEffect(() => {
    const newVideoSrc = data.banner_data[selectedIndex]?.banner_video;
    if (newVideoSrc) {
      if (videoRef.current) {
        videoRef.current.src = newVideoSrc;
        videoRef.current.load();

        const posterDisplayTime = 5000;
        videoRef.current.setAttribute(
          "poster",
          data.banner_data[selectedIndex]?.banner_img
        );

        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.play();
          }
        }, posterDisplayTime);
      }
    }
  }, [data.banner_data, selectedIndex]);

  return (
    <>
      {data.banner_data[selectedIndex]?.banner_video ? (
        <video
          ref={videoRef}
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover bg-black hidden xl:block"
          poster={data.banner_data[selectedIndex]?.banner_img}
        >
          <source
            src={data.banner_data[selectedIndex]?.banner_video}
            type="video/mp4"
          />
        </video>
      ) : (
        <Image
          src={data.banner_data[selectedIndex]?.banner_img}
          alt="lorem"
          width={1000}
          height={1000}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <Image
        src={data.banner_data[selectedIndex]?.banner_img}
        alt="lorem"
        width={1000}
        height={1000}
        className="absolute inset-0 w-full h-full object-cover block xl:hidden"
      />
      <span className="w-1/2 absolute left-0 bottom-0 z-10 pointer-events-none max-h-screen overflow-hidden hidden xl:block">
        <BgElement />
      </span>
      <div className="w-full px-10 relative z-10 xl:w-1/2 max-xl:px-1">
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          slidesPerView={1}
          slidesPerGroup={1}
          modules={[FreeMode, Navigation, Thumbs]}
          direction={"vertical"}
          speed={900}
          simulateTouch={false}
          className="max-h-[calc(100vh-100px)] mt-20"
        >
          {data?.banner_data?.map((item: any, index: any) => (
            <SwiperSlide key={index}>
              <div className="h-full flex flex-col justify-center gap-20 pt-20 max-xl:pt-5 items-center">
                <div className="relative text-gray-100 space-y-6">
                  <h3 className="text-4xl xl:text-5xl font-semibold">{item.title}</h3>
                  <p className="text-xl max-xl:text-base">{item.description}</p>
                  <button className="hover:bg-[#be4006] px-5 py-2 rounded-full text-lg font-semibold flex items-center gap-2 shadow  border-[#be4006] border-2 transition-all duration-500 [&>span]:hover:ml-5">
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
