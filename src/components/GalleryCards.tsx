"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowIcon } from "@/assets/iconSvg";
import List from "./GalleryCard";
import Modal from "./GalleryModal";

import data from "../../db.json";

import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

export default function GalleryCards() {
  const [selected, setSelected] = useState(null);

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
        <div className="pt-10 pb-5 max-xl:pt-0">
          <Link href={"/foto-galereya"}>
            <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold w-fit my-10 flex items-center gap-2 [&>div]:hover:ml-2 [&>div]:hover:opacity-100 transition-all duration-300">
              <span className="text-[#FA7436]">Фотогалерея</span>
              <div className=" transition-all duration-300 opacity-0">
                <ArrowIcon />
              </div>
            </h2>
          </Link>

          <div>
            <List
              setSelected={setSelected}
              datalist={data.galereya.data[0].data}
            />
            <Modal selected={selected} setSelected={setSelected} />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
