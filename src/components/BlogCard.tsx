import Image from "next/image";
import React from "react";

export default function BlogCard() {
  return (
    <div className="max-w-md w-full rounded-lg overflow-hidden hover:bg-white transition-all duration-300 cursor-pointer hover:shadow-lg">
      <Image
        src={"https://fakeimg.pl/250x100/"}
        alt="salom"
        width={1000}
        height={1000}
        className="w-full h-44 object-cover object-center"
      />
      <div className="p-2">
        <h3 className="line-clamp-2 font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
          voluptas!
        </h3>
        <p className="text-gray-400 text-[15px] pt-2">July 27, 2021</p>
      </div>
    </div>
  );
}
