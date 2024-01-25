import { MapPin } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

export default function AsiaBestPlacesCard() {
  return (
    <div className="max-w-md w-full rounded-lg relative 2xl:h-[500px] h-[400px] overflow-hidden group">
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
      <div className="absolute bottom-2 left-0 px-2 space-y-2">
        <h3 className="font-bold text-2xl text-gray-100">
          Java Travel Guide: Best Things to do (8-day Route)
        </h3>
        <span className="flex gap-1 items-center text-sm text-gray-100">
          <MapPin size={"18px"} />
          <span>Indanesia</span>
        </span>
      </div>
    </div>
  );
}
