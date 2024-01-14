"use client";

import { Fragment, useRef } from "react";
import Link from "next/link";

import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

import CustomSwiper from "./SwiperCustom";
import MainCard from "./MainCard";

import { ArrowIcon } from "@/assets/iconSvg";
import { alltourism } from "../../db.json";


export default function Attractions() {
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
        <div className="py-2">
          <Link href={"/tourism"} className="w-fit block">
            <h2 className="text-lg xl:text-3xl 2xl:text-4xl font-semibold w-fit flex items-center gap-2 [&>div]:hover:ml-2 [&>div]:hover:opacity-100 transition-all duration-300">
              Туризм для <span className="text-[#FA7436]">всех</span>
              <div className=" transition-all duration-300 opacity-0">
                <ArrowIcon />
              </div>
            </h2>
          </Link>

          <div className="default-swiper max-w-full">
            <CustomSwiper
              navigation
              between={30}
              // autoplay={5000}
              slidesNumber={3}
              loop
            >
              {alltourism.data?.map((item: any) => (
                <Fragment key={item.id}>
                  <MainCard data={item} />
                </Fragment>
              ))}
            </CustomSwiper>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
