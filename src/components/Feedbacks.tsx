"use client";

import React, { useRef } from "react";
import FeedbackCard from "./FeedbackCard";

import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

export default function Feedbacks() {
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
        <div className="flex items-center py-10 gap-10 max-xl:flex-col max-xl:py-0 max-xl:gap-2">
          <div className="space-y-5 w-max max-xl:w-full">
            <h2 className="text-3xl 2xl:text-4xl font-semibold">
              What people say{" "}
              <span className="text-[#FA7436]">about Uzbekistan.</span>
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              eligendi at maxime odit vitae totam obcaecati?
            </p>
          </div>
          <div className="w-7/12 max-xl:w-full">
            <FeedbackCard />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
