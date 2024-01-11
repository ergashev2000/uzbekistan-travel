import { ArrowIcon } from "@/assets/iconSvg";
import optimizePath from "@/util/optimizePath";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MainCard({ data }: { data: any }) {
  if (!data) {
    return "loading...";
  }

  return (
    <Link href={data?.slug}>
      <div className="relative border-4 border-white max-w-md w-full rounded-2xl overflow-hidden group hover:shadow-lg cursor-pointer transition-all duration-300">
        <span className=" group-hover:bg-opacity-50 absolute left-0 bottom-0 w-full h-16 bg-black bg-opacity-0 transition-all duration-500 hover:shadow-2xl z-10" />
        <Image
          src={data.img}
          alt={data.img_tags || data.title}
          width={1000}
          height={1000}
          className="w-full h-56 object-cover hover:scale-105 transition-all duration-500 group-hover:scale-105"
        />
        <h3 className=" pointer-events-none text-white hover:shadow-lg shadow-2xl text-xl font-semibold absolute bottom-2 left-4 w-full z-10 [&>svg]:opacity-0 group-hover:[&>svg]:opacity-100 flex items-center leading-6 group-hover:[&>svg]:ml-2 [&>svg]:transition-all [&>svg]:duration-500">
          {data?.title} <ArrowIcon />
        </h3>
      </div>
    </Link>
  );
}
