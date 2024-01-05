"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowIcon } from "@/assets/iconSvg";
import List from "./GalleryCard";
import Modal from "./GalleryModal";

export default function GalleryCards() {
  const [selected, setSelected] = useState(null);

  return (
    <section>
      <div className="container mx-auto px-0 py-10">
        <Link href={"/"} passHref>
          <h2 className="text-[60px] xl:text-2xl 2xl:text-3xl font-semibold w-fit my-10 flex items-center gap-2 [&>div]:hover:ml-2 [&>div]:hover:opacity-100 transition-all duration-300">
            Photo <span className="text-[#FA7436]">gallery</span>
            <div className=" transition-all duration-300 opacity-0">
              <ArrowIcon />
            </div>
          </h2>
        </Link>

        <div>
          <List setSelected={setSelected} />
          <Modal selected={selected} setSelected={setSelected} />
        </div>
      </div>
    </section>
  );
}
