import { GoogleMapIcon } from "@/assets/iconSvg";
import { ArrowBigRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const weatherData = [
  {
    monthName: "Jan",
    gradus: 8,
    gradusH: "30%",
    icon: "🌤",
  },
];

export default function CountryWeather() {
  return (
    <div className="flex gap-5">
      <div className="p-2 rounded-xl h-auto w-1/4 bg-white relative">
        <Image
          src={
            "https://firebasestorage.googleapis.com/v0/b/wetravel-uz.appspot.com/o/japan-graphic-map-526x600.webp?alt=media&token=e3708806-253e-4bf3-876f-e9aeadb0d480"
          }
          alt="map"
          width={600}
          height={600}
          className="w-full h-full rounded-lg object-cover object-center"
        />
        <span className="text-[15px] font-semibold absolute left-4 text-white bottom-11">
          Map of Japon
        </span>
        <Link
          href={"/"}
          className="font-semibold text-[14px] text-gray-600 hover:text-black flex items-center gap-2 pt-2"
        >
          <GoogleMapIcon />
          <span className="whitespace-nowrap">
            Our Japan tips in your Google Maps
          </span>
          <MoveRight />
        </Link>
      </div>
      <div className="w-3/4 flex gap-5">
        <div className="w-1/4">
          <h2 className="text-xl font-semibold">Weather in Japan</h2>
          <p className="text-sm">
            Experience Japans beauty year-round! Enjoy cherry blossoms in the
            spring, warm weather and little rain in summer, vibrant maple tree
            colors in fall, and snowy landscapes in winter. For the best chance
            of seeing Mount Fuji, the winter months are perfect.
          </p>
        </div>
        <div className="w-3/4 h-[280px]">
          <div className="w-full flex gap-2 h-full">
            {weatherData?.map(item => (
              <div className="w-1/12 px-1" key={item.monthName}>
                <div className="bg-red-400  rounded-t-full h-full relative bg-opacity-40">
                  <div className="top-2 relative left-0 text-3xl text-center">
                    {item.icon}
                  </div>
                        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 rounded-t-full h-[${item.gradusH}] bg-red-500 flex justify-center`}>
                    <span className="text-[15px] text-white mt-2 whitespace-nowrap">
                      {item.gradus} C
                    </span>
                  </div>
                </div>
                    <p className="text-center font-bold">{ item.monthName}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-8">
            <p>Switch</p>
            <div className="flex gap-3">
              <p>good</p>
              <p>bad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
