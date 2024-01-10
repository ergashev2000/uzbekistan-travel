"use client";
import { ArrowIcon } from "@/assets/iconSvg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CitiesCard = ({ city }: { city: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={city.slug}
      className="rounded-xl block w-full h-max overflow-hidden shadow-lg border-4 border-white group"
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative"
      >
        <Image
          src={city.img}
          alt={city.title}
          width={1000}
          height={1000}
          className="w-full h-[220px]"
        />
        {city.img2 && (
          <Image
            src={city.img2}
            alt=""
            width={1000}
            height={1000}
            className={`w-full h-[220px] transition-opacity duration-300 cursor-pointer absolute top-0 left-0 opacity-${
              isHovered ? "100" : "0"
            }`}
          />
        )}
      </div>
      <div className="bg-white w-full px-2 py-1">
        <h3 className="text-lg font-semibold flex gap-2 items-center group-hover:[&>svg]:opacity-100 [&>svg]:opacity-0 [&>svg]:transition-all [&>svg]:duration-300 group-hover:[&>svg]:ml-2 ">
          {city.title} <ArrowIcon />
        </h3>
        <p className="text-[15px] text-gray-500">{city.description}</p>
      </div>
    </Link>
  );
};

export default CitiesCard;
