import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function AsiaBlogMainCard() {
  return (
    <div className="max-w-md w-full rounded-lg relative h-[280px] 2xl:h-[320px] overflow-hidden group">
      <div className="relative w-full h-full">
        <Image
          src={
            "https://firebasestorage.googleapis.com/v0/b/wetravel-uz.appspot.com/o/central-east-java-route-guide-header-1380x1080.jpg?alt=media&token=0a34f8c3-a292-4b6d-862f-a4a5a33db5e4"
          }
          alt="img"
          width={1000}
          height={1000}
          className="h-full w-full object-cover group-hover:scale-105 transition duration-700 object-center "
        />
        <span className="bg-black bg-opacity-10 w-full h-full absolute left-0 top-0"></span>
      </div>
      <h3 className="test text-xl text-black absolute top-7 left-0 mx-7 leading-9">
        <span className="rounded py-[5px] font-bold">
          Java Travel Guide: Best Things to do (8-day Route)
        </span>
      </h3>
    </div>
  );
}
