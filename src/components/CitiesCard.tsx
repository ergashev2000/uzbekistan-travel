"use client";
import Image from "next/image";
import { useState } from "react";

const CitiesCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="rounded-xl max-w-md w-full h-max overflow-hidden shadow-lg border-4 border-white">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative"
      >
        <Image
          src={
            "https://firebasestorage.googleapis.com/v0/b/uzbekistan-travel-ea70f.appspot.com/o/thumb_1608_1920_0_0_0_auto.jpg?alt=media&token=0136cdea-c40c-45ed-803a-ac397dd43d52"
          }
          alt=""
          width={1000}
          height={1000}
          className="w-full h-[220px]"
        />
        <Image
          src={
            "https://firebasestorage.googleapis.com/v0/b/uzbekistan-travel-ea70f.appspot.com/o/491418850.jpg?alt=media&token=d3bb8213-1112-4fdf-98af-abd8f6f8c8ca"
          }
          alt=""
          width={1000}
          height={1000}
          className={`w-full h-[220px] transition-opacity duration-300 cursor-pointer absolute top-0 left-0 opacity-${
            isHovered ? "100" : "0"
          }`}
        />
      </div>
      <div className="bg-white w-full px-2 py-1">
        <h3 className="text-lg font-semibold">Toshkent</h3>
        <p className="text-sm text-gray-500">Современный мегаполис</p>
      </div>
    </div>
  );
};

export default CitiesCard;
