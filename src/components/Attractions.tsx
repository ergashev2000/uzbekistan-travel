"use client";

import Link from "next/link";
import CustomSwiper from "./SwiperCustom";
import { ArrowIcon } from "@/assets/iconSvg";
import MainCard from "./MainCard";

import { attractions } from "../../db.json";
import { Fragment, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

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
        <div className="py-10">
          <Link href={"/attractions"} passHref>
            <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold w-fit my-5 flex items-center gap-2 [&>div]:hover:ml-2 [&>div]:hover:opacity-100 transition-all duration-300">
              Достопримечательности
              <div className=" transition-all duration-300 opacity-0">
                <ArrowIcon />
              </div>
            </h2>
          </Link>

          <div className="default-swiper">
            <CustomSwiper
              navigation
              between={30}
              autoplay={5000}
              slidesNumber={3}
              loop
              
            >
              {attractions.data?.map((attraction: any) => (
                <Fragment key={attraction.id}>
                  <MainCard data={attraction} />
                </Fragment>
              ))}
            </CustomSwiper>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
