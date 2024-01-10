"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowIcon } from "@/assets/iconSvg";
import List from "./GalleryCard";
import Modal from "./GalleryModal";

import data from '../../db.json'

export default function GalleryCards() {
  const [selected, setSelected] = useState(null);
  
  return (
    <section>
      <div className="pt-10 pb-5">
        <Link href={"/foto-galereya"}>
          <h2 className="text-[60px] xl:text-2xl 2xl:text-3xl font-semibold w-fit my-10 flex items-center gap-2 [&>div]:hover:ml-2 [&>div]:hover:opacity-100 transition-all duration-300">
            Photo <span className="text-[#FA7436]">gallery</span>
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
  );
}
