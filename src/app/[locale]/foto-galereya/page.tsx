import DynamicHero from "@/components/DynamicHero";
import React, { Fragment } from "react";

import data from "../../../../db.json";
import MainCard from "@/components/MainCard";
import Image from "next/image";
import CustomSwiper from "@/components/SwiperCustom";
import Link from "next/link";
import optimizePath from "@/util/optimizePath";

export default function page() {
  return (
    <div className="min-h-screen">
      <DynamicHero header={data.galereya.header} />
      <div className="container mx-auto py-10">
        {data.galereya.data?.map((item: any) => (
          <>
            <Link
              href={`/foto-galereya/${optimizePath(item?.header?.title)}`}
              className="w-fit block"
            >
              <h2 className="text-xl xl:text-2xl 2xl:text-3xl font-semibold w-max flex items-center gap-2 [&>div]:hover:ml-2 [&>div]:hover:opacity-100 transition-all duration-300">
                Города
              </h2>
            </Link>
            <div className="default-swiper">
              <CustomSwiper slidesNumber={3.5} between={20} navigation>
                {item?.data?.map((item: any) => (
                  <Link
                    href={`/foto-galereya/${optimizePath(item.city_category)}`}
                    key={item.id}
                  >
                    <div className="max-w-md w-full relative group cursor-pointer overflow-hidden rounded-lg">
                      <span className="left-0 top-0 absolute w-full h-full bg-black bg-opacity-50 group-hover:opacity-100 opacity-0 transition-all duration-500"></span>
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={1000}
                        height={1000}
                        className="w-full h-52 rounded-lg object-cover object-center"
                      />
                      <h3 className="text-xl font-semibold absolute bottom-3 left-3 group-hover:opacity-100 opacity-0 text-white transition-all duration-500">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </CustomSwiper>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
