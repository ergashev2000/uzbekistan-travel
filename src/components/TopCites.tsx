'use client'

import { ArrowIcon } from "@/assets/iconSvg";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

import data from '../../db.json'
import { useScroll, useTransform } from "framer-motion";

import { motion } from "framer-motion";


export default function TopCites() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div ref={ref} style={{
      scale: scaleProgress,
      opacity: opacityProgress
    }}>
      <section>

      <div className="py-14">
        <Link href={"/cities"} className="w-fit block">
          <h2 className="text-xl xl:text-2xl 2xl:text-3xl font-semibold w-max my-10 flex items-center gap-2 [&>div]:hover:ml-2 [&>div]:hover:opacity-100 transition-all duration-300">
            Top Cities of <span className="text-[#FA7436]">Uzbekistan</span>
            <div className=" transition-all duration-300 opacity-0">
              <ArrowIcon />
            </div>
          </h2>
        </Link>
        <div className="flex gap-2 xl:gap-3 2xl:gap-5 items-center justify-between">
          <div className="relative w-1/3 block 2xl:h-[600px] h-[300px] xl:h-[400px] rounded-lg overflow-hidden hover:[&>a]:opacity-100">
            <Image
              src={data.allcities.data[0]?.img}
              alt="lorem"
              width={1000}
              height={1000}
              className="w-full h-full object-cover block"
            />
            <Link
              href={data.allcities.data[0]?.slug}
              className="absolute w-full h-full bg-black bg-opacity-30 inset-1 left-0 top-0 opacity-0 transition-all duration-500 cursor-pointer"
            >
              <p className="text-white p-5">
                {data.allcities.data[0]?.description}
              </p>
              <h3 className="absolute bottom-5 left-5 text-white font-semibold text-2xl flex items-center gap-5">
                {data.allcities.data[0]?.title} <ArrowIcon />
              </h3>
            </Link>
          </div>
          <div className="flex flex-col gap-2 xl:gap-3 2xl:gap-5 w-1/3 h-[300px] 2xl:h-[600px] xl:h-[400px] justify-center items-center">
            <div className="relative h-1/2 w-full rounded-lg overflow-hidden shadow-lg hover:[&>a]:opacity-100">
              <Image
                src={data.allcities.data[1]?.img}
                alt="lorem"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
              <Link
                href={data.allcities.data[1]?.slug}
                className="absolute w-full h-full bg-black bg-opacity-30 inset-1 left-0 top-0 opacity-0 transition-all duration-500 cursor-pointer"
              >
                <p className="text-white p-3">
                  {data.allcities.data[1]?.description}{" "}
                </p>
                <h3 className="absolute bottom-3 left-3 text-white font-semibold text-2xl flex items-center gap-5">
                  {data.allcities.data[1]?.title} <ArrowIcon />
                </h3>
              </Link>
            </div>
            <div className="relative h-1/2 w-full rounded-lg overflow-hidden shadow-lg hover:[&>a]:opacity-100">
              <Image
                src={data.allcities.data[2]?.img}
                alt="lorem"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
              <Link
                href={data.allcities.data[2]?.slug}
                className="absolute w-full h-full bg-black bg-opacity-30 inset-1 left-0 top-0 opacity-0 transition-all duration-500 cursor-pointer"
              >
                <p className="text-white p-3">
                  {data.allcities.data[2]?.description}
                </p>
                <h3 className="absolute bottom-3 left-3 text-white font-semibold text-2xl flex items-center gap-5">
                  {data.allcities.data[2]?.title} <ArrowIcon />
                </h3>
              </Link>
            </div>
          </div>
          <div className="relative w-1/3 2xl:h-[600px] h-[300px] shadow-lg xl:h-[400px] rounded-lg overflow-hidden hover:[&>a]:opacity-100">
            <Image
              src={data.allcities.data[3]?.img}
              alt="lorem"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <Link
              href={data.allcities.data[3]?.slug}
              className="absolute w-full h-full bg-black bg-opacity-30 inset-1 left-0 top-0 opacity-0 transition-all duration-500 cursor-pointer"
            >
              <p className="text-white p-5 text-lg">
                {data.allcities.data[3]?.description}
              </p>
              <h3 className="absolute bottom-5 left-5 text-white font-semibold text-2xl flex items-center gap-5">
                {data.allcities.data[3]?.title} <ArrowIcon />
              </h3>
            </Link>
          </div>
        </div>
      </div>
      </section>
    </motion.div>
  );
}
