'use client'

import Link from "next/link";
import CustomSwiper from "./SwiperCustom";
import { ArrowIcon } from "@/assets/iconSvg";
import MainCard from "./MainCard";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Attractions() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1 1"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
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
          <Link href={"/"} passHref>
            <h2 className="text-[60px] xl:text-2xl 2xl:text-3xl font-semibold w-fit my-5 flex items-center gap-2 [&>div]:hover:ml-2 [&>div]:hover:opacity-100 transition-all duration-300">
              Top routes
              <div className=" transition-all duration-300 opacity-0">
                <ArrowIcon />
              </div>
            </h2>
          </Link>

          <div className="default-swiper">
            {/* <CustomSwiper
              navigation
              between={30}
              autoplay={5000}
              slidesNumber={3.6}
              loop
            >
              <MainCard />
              <MainCard />
              <MainCard />
              <MainCard />
              <MainCard />
            </CustomSwiper> */}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
