"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import CitiesCard from "./CitiesCard";
import { fadeInAnimation } from "@/util/framerMotion";

import { ArrowIcon } from "@/assets/iconSvg";
import { allcities } from "../../db.json";

export default function Cities() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div>
      <section ref={ref}>
        <Link href={"/cities"} className="w-fit block">
          <h2 className="text-lg xl:text-3xl 2xl:text-4xl font-semibold w-fit my-4 xl:my-10 flex items-center gap-2 [&>div]:hover:ml-2 [&>div]:hover:opacity-100 transition-all duration-300">
            Города <span className="text-[#FA7436]">Узбекистана</span>
            <div className=" transition-all duration-300 opacity-0">
              <ArrowIcon />
            </div>
          </h2>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-10 transition-all duration-500">
          {allcities.data.map((city: any, index: any) => (
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
