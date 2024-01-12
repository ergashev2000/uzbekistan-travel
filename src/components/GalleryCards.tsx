"use client";

import React, { useState } from "react";
import Link from "next/link";

import List from "./GalleryCard";
import Modal from "./GalleryModal";

import { ArrowIcon } from "@/assets/iconSvg";
import { galereya } from "../../db.json";

export default function GalleryCards() {
  const [selected, setSelected] = useState(null);

  return (
      <section>
        <div className="pb-5">
          <Link href={"/foto-galereya"}>
            <h2 className="text-lg xl:text-3xl 2xl:text-4xl font-semibold w-fit my-4 xl:my-10 flex items-center gap-2 [&>div]:hover:ml-2 [&>div]:hover:opacity-100 transition-all duration-300">
              <span className="text-[#FA7436]">Фотогалерея</span>
              <div className=" transition-all duration-300 opacity-0">
                <ArrowIcon />
              </div>
            </h2>
          </Link>

          <div>
            <List
              setSelected={setSelected}
              datalist={galereya.data[0].data}
            />
            <Modal selected={selected} setSelected={setSelected} />
          </div>
        </div>
      </section>
  );
}
