import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MainCard() {
  return (
    <Link href={"/"}>
      <div className="relative max-w-md w-full rounded-lg overflow-hidden hover:shadow-lg cursor-pointer transition-all duration-300 group">
        <Image
          src={"https://fakeimg.pl/250x100/"}
          alt="Image"
          width={1000}
          height={1000}
          className="w-full h-56 object-cover"
        />
        <h3 className="text-white text-lg font-semibold absolute bottom-4 left-4 w-full">
            Museum of Victims of Repressions
        </h3>
      </div>
    </Link>
  );
}
