"use client";

import { ArrowIcon } from "@/assets/iconSvg";
import Image from "next/image";
import Link from "next/link";
import CitiesCard from "./CitiesCard";

import data from "../../db.json";
import { Fragment, useRef } from "react";
import { useScroll, useTransform, motion, animate } from "framer-motion";

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * index,
    },
  }),
};

export default function Cities() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div>
      <section ref={ref}>
        <Link href={"/cities"} className="w-fit block">
          <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold w-fit my-10 flex items-center gap-2 [&>div]:hover:ml-2 [&>div]:hover:opacity-100 transition-all duration-300">
            Города <span className="text-[#FA7436]">Узбекистана</span>
            <div className=" transition-all duration-300 opacity-0">
              <ArrowIcon />
            </div>
          </h2>
        </Link>

        <div className="grid grid-cols-4 gap-2 mb-10 transition-all duration-500 max-xl:grid-cols-1">
          {data.allcities.data.map((city: any, index: any) => (
            <motion.div
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              key={city.id}
              custom={index}
            >
              <CitiesCard city={city} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
