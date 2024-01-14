"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import CustomSwiper from "./SwiperCustom";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

import { hotels } from "../../db.json";
import { MapPinIcon } from "@/assets/iconSvg";

export default function Hotels() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section>
        <div className="py-2 xl:py-5">
          <h2 className="text-lg py-5 xl:text-3xl 2xl:text-4xl font-semibold w-fit   flex items-center gap-2 [&>div]:hover:ml-2 [&>div]:hover:opacity-100 transition-all duration-300 flex-wrap max-xl:mb-0">
            Luxury Hotels in <span className="text-[#FA7436]">Uzbekistan</span>
          </h2>
          <div className="default-swiper">
            <CustomSwiper between={30} slidesNumber={3.6} navigation loop>
              {hotels?.map(item => (
                <div
                  key={item.id}
                  className="w-full flex-col max-w-lg rounded-lg p-3 shadow flex items-center gap-3 border-4 border-white h-full"
                >
                  <div className="relative max-w-xl w-full h-44 overflow-hidden [&>img]:hover:scale-105 rounded-lg cursor-pointer">
                    <Image
                      src={item.img}
                      alt={`${item.title} ${item.img_tags}`}
                      width={1000}
                      height={1000}
                      className="w-full object-cover h-full transition-all duration-500"
                    />
                    <span className="absolute bottom-2 right-2 bg-[#FA7436] w-6 flex justify-center items-center text-sm h-6 rounded shadow text-white">
                      {item.reviews}
                    </span>
                  </div>
                  <div className="flex flex-col h-full gap-2 justify-between p-1">
                    <div>
                      <h3 className="text-sm xl:text-base font-semibold h-12">
                        {item.title}
                      </h3>
                      <p className="text-[16px] line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <p className="flex items-center gap-1 text-gray-500 text-[14px]">
                        <MapPinIcon />
                        {item.city}
                      </p>
                      <Link href={item.booking_url} target="_blank">
                        <button className="px-4 text-sm whitespace-nowrap py-2 rounded-full bg-[#FA7436] border border-[#FA7436] hover:bg-transparent transition-all duration-500 text-white hover:text-black font-semibold">
                          Booking Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </CustomSwiper>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
