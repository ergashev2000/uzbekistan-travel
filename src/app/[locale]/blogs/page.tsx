"use client";

import React, { Fragment, useEffect, useState } from "react";

import resData from "../../../../db.json";
import MainCard from "@/components/MainCard";
import { DateIcon } from "@/assets/iconSvg";

import { allblogs } from "../../../../db.json";
import Image from "next/image";
import Link from "next/link";

interface Section {
  id: number;
  title: string;
  img: string;
}

export default function Page() {
  const [sections, setSections] = useState<Section[]>([]);
  const [headerData, setHeaderData] = useState({});


  useEffect(() => {
    if (resData) {
      setSections(resData.allcities.data);
      setHeaderData(resData.alltourism.header);
    }
  }, []);

  return (
    <div className="min-h-screen pt-24 container mx-auto py-10">
      <div className="text-sm font-semibold items-center flex gap-2 pb-5">
        <Link href={'/'}>Главная</Link> /<span>Блог</span>
      </div>
      <div className="h-[calc(100vh-200px)] bg-[url(https://firebasestorage.googleapis.com/v0/b/uzbekistan-travel-ea70f.appspot.com/o/86ashblxr375ju1dlpqlgzkwbaa9ppvj.webp?alt=media&token=0efdadc2-b153-4d75-862a-963d2eb90e43)] bg-cover bg-top  rounded-2xl w-full bg-white shadow relative">
        <div className="text-white absolute bottom-16 left-10 space-y-10 w-1/2">
          <h2 className="text-4xl font-semibold">
            Хива — прогулка по древнему городу в Узбекистане
          </h2>
          <span className="flex items-center gap-2 text-sm">
            <DateIcon /> 19.02.2023
          </span>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-3 gap-5 py-10">
          {allblogs?.map((item: any) => (
            <div
              key={item.id}
              className="max-w-lg w-full hover:shadow-lg p-2 rounded-2xl cursor-pointer hover:bg-white transition-all duration-500"
            >
              <div className="w-full h-52 rounded-xl overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <div className=" flex items-center justify-between gap-2 text-sm text-gray-600 py-3">
                  <span className=" flex items-center gap-2">
                    <DateIcon /> {item.date}
                  </span>
                  <span className=" flex items-center gap-2">
                    <DateIcon /> {item.read_time} минут на чтение
                  </span>
                </div>
                <h2 className="text-lg xl:text-xl 2xl:text-2xl font-semibold line-clamp-2">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
