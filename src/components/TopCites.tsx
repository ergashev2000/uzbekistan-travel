import { ArrowIcon } from "@/assets/iconSvg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TopCites() {
  return (
    <section>
      <div className="container mx-auto py-16 px-5">
        <Link href={"/"}>
          <h2 className=" text-xl xl:text-2xl 2xl:text-3xl font-semibold w-fit my-10 flex items-center gap-2 [&>span]:hover:ml-2 [&>span]:hover:opacity-100 transition-all duration-300 hover:text-blue-500">
            Top Cities of Uzbekistan
            <span className=" transition-all duration-300 opacity-0">
              <ArrowIcon />
            </span>
          </h2>
        </Link>
        <div className="flex gap-5 items-center justify-between">
          <div className="relative w-1/3 block 2xl:h-[600px] h-[300px] xl:h-[400px] rounded-lg overflow-hidden hover:[&>a]:opacity-100">
            <Image
              src={
                "https://uzbekistan.travel/storage/app/uploads/public/5eb/46f/6e1/thumb_764_600_0_0_0_auto.jpg"
              }
              alt="lorem"
              width={300}
              height={200}
              className="w-full h-full object-cover block"
            />
            <Link
              href={"/"}
              className="absolute w-full h-full bg-black bg-opacity-30 inset-1 left-0 top-0 opacity-0 transition-all duration-500 cursor-pointer"
            >
              <p className="text-white p-5 text-lg">
                Toshkent – O‘zbekistonning poytaxti va shu bilan birga Markaziy
                Osiyodagi eng yirik shahardir.
              </p>
              <h4 className="absolute bottom-5 left-5 text-white font-semibold text-2xl flex items-center gap-5">
                Tashkent <ArrowIcon />
              </h4>
            </Link>
          </div>
          <div className="flex flex-col gap-5 w-1/3 h-[300px] 2xl:h-[600px] xl:h-[400px] justify-center items-center">
            <div className="relative h-1/2 w-full rounded-lg overflow-hidden shadow-lg hover:[&>a]:opacity-100">
              <Image
                src={
                  "https://uzbekistan.travel/storage/app/uploads/public/5eb/46f/ce0/thumb_765_600_0_0_0_auto.jpg"
                }
                alt="lorem"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
              <Link
                href={"/"}
                className="absolute w-full h-full bg-black bg-opacity-30 inset-1 left-0 top-0 opacity-0 transition-all duration-500 cursor-pointer"
              >
                <p className="text-white p-5 text-lg">
                  Toshkent – O‘zbekistonning poytaxti va shu bilan birga
                  Markaziy Osiyodagi eng yirik shahardir.
                </p>
                <h4 className="absolute bottom-5 left-5 text-white font-semibold text-2xl flex items-center gap-5">
                  Tashkent <ArrowIcon />
                </h4>
              </Link>
            </div>
            <div className="relative h-1/2 w-full rounded-lg overflow-hidden shadow-lg hover:[&>a]:opacity-100">
              <Image
                src={
                  "https://uzbekistan.travel/storage/app/uploads/public/5eb/46f/6e1/thumb_764_600_0_0_0_auto.jpg"
                }
                alt="lorem"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
              <Link
                href={"/"}
                className="absolute w-full h-full bg-black bg-opacity-30 inset-1 left-0 top-0 opacity-0 transition-all duration-500 cursor-pointer"
              >
                <p className="text-white p-5 text-lg">
                  Toshkent – O‘zbekistonning poytaxti va shu bilan birga
                  Markaziy Osiyodagi eng yirik shahardir.
                </p>
                <h4 className="absolute bottom-5 left-5 text-white font-semibold text-2xl flex items-center gap-5">
                  Tashkent <ArrowIcon />
                </h4>
              </Link>
            </div>
          </div>
          <div className="relative w-1/3 2xl:h-[600px] h-[300px] shadow-lg xl:h-[400px] rounded-lg overflow-hidden hover:[&>a]:opacity-100">
            <Image
              src={
                "https://uzbekistan.travel/storage/app/uploads/public/5eb/470/5d1/thumb_769_600_0_0_0_auto.jpg"
              }
              alt="lorem"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
            <Link
              href={"/"}
              className="absolute w-full h-full bg-black bg-opacity-30 inset-1 left-0 top-0 opacity-0 transition-all duration-500 cursor-pointer"
            >
              <p className="text-white p-5 text-lg">
                Toshkent – O‘zbekistonning poytaxti va shu bilan birga Markaziy
                Osiyodagi eng yirik shahardir.
              </p>
              <h4 className="absolute bottom-5 left-5 text-white font-semibold text-2xl flex items-center gap-5">
                Tashkent <ArrowIcon />
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
