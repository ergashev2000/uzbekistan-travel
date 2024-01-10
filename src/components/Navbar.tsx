"use client";
import { motion } from "framer-motion";

import Image from "next/image";

import LogoWhite from "@/assets/images/logo_white.png";
import RussiaFlag from "@/assets/icons/russia-flag.svg";
import Link from "next/link";
import { ArrowIcon, DownIcon, SearchIcon } from "@/assets/iconSvg";
import SearchModal from "./SearchModal";
import { useEffect, useState } from "react";
import optimizePath from "@/util/optimizePath";
import { usePathname } from "next/navigation";

const shahar = [
  "Ташкент",
  "Самарканд",
  "Бухара",
  "Хива",
  "Шахрисабз",
  "Муйнак",
  "Заамин",
  "Термез",
  "Гулистан",
  "Нукус",
  "Наманган",
  "Карши",
  "Навои",
  "Коканд",
  "Андижан",
  "Фергана",
  "Регионы Узбекистана",
];

const travels = [
  "Спортивный туризм",
  "Этнический туризм",
  "Молодежный туризм",
  "Экотуризм",
  "Гастро туризм",
  "Медицинский туризм",
  "Культурный туризм",
  "MICE туризм",
  "Паломнический туризм",
  "Литературный туризм",
  "Промышленный туризм",
  "Медленный туризм",
  "Приключенческий туризм",
  "Геотуризм",
];

export default function Navbar() {
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  const pathname = usePathname();

  const handleMouseEnter = (index: any) => {
    setHoveredDropdown(index);
  };

  const handleMouseLeave = () => {
    setHoveredDropdown(null);
  };

  useEffect(() => {
    handleMouseLeave();
  }, [pathname]);

  return (
    <div className="fixed backdrop-blur bg-black bg-opacity-40 w-full z-20 transition-all duration-500">
      <div className="flex items-center justify-between container mx-auto py-2 ">
        <Link href={"/"}>
          <div className="xl:w-28 2xl:w-40 w-28">
            <Image
              src={LogoWhite}
              alt="Uzbekistan travel logo"
              className="w-full"
            />
          </div>
        </Link>
        <div className="flex items-center gap-16 justify-between">
          <nav>
            <ul className="flex gap-2 items-center text-sm text-gray-100">
              <li
                className={`relative xl:text-[15px] 2xl:text-sm cursor-pointer p-2 ${
                  hoveredDropdown === 0 ? "hovered" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="/cities">
                  <span
                    className={`flex items-center gap-1 [&>svg]:w-[18px] [&>svg]:duration-200 [&>svg]:transition-all ${
                      hoveredDropdown === 0
                        ? "[&>svg]:rotate-180"
                        : "[&>svg]:rotate-0"
                    }`}
                  >
                    Города <DownIcon />
                  </span>
                </Link>
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredDropdown === 0 ? 1 : 0,
                    y: hoveredDropdown === 0 ? 10 : 20,
                  }}
                  transition={{ duration: 0.1 }}
                  className={`absolute  transition-all duration-500 bg-custom-blur text-black max-w-[600px] h-auto py-1 whitespace-nowrap left-0 rounded-lg ${
                    hoveredDropdown === 0 ? "" : "hidden"
                  }`}
                >
                  {shahar.map(item => (
                    <motion.li key={item} whileHover={{ scale: 1.05 }}>
                      <Link href={`/cities/${optimizePath(item)}`}>
                        <div className="font-semibold hover:bg-white 2xl:text-sm 2xl:py-1 xl:text-[15px] px-5 rounded-lg">
                          {item}
                        </div>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </li>
              <li
                className={`relative xl:text-[15px] 2xl:text-sm cursor-pointer p-2 ${
                  hoveredDropdown === 1 ? "hovered" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                <Link href={"/tourism"}>
                  <span
                    className={`flex items-center gap-1 [&>svg]:w-[18px] [&>svg]:duration-200 [&>svg]:transition-all ${
                      hoveredDropdown === 1
                        ? "[&>svg]:rotate-180"
                        : "[&>svg]:rotate-0"
                    }`}
                  >
                    Туризм для всех <DownIcon />
                  </span>
                </Link>

                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredDropdown === 1 ? 1 : 0,
                    y: hoveredDropdown === 1 ? 10 : 20,
                  }}
                  transition={{ duration: 0.1 }}
                  className={`absolute  transition-all duration-500 bg-custom-blur text-black max-w-[600px] h-auto py-1 whitespace-nowrap left-0 rounded-lg ${
                    hoveredDropdown === 1 ? "" : "hidden"
                  }`}
                >
                  {travels.map(item => (
                    <motion.li key={item} whileHover={{ scale: 1.05 }}>
                      <Link href={`/tourism/${optimizePath(item)}`}>
                        <div className="font-semibold hover:bg-white 2xl:text-sm 2xl:py-1 xl:text-[15px] px-5 rounded-lg">
                          {item}
                        </div>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </li>
              <li
                className={`relative xl:text-[15px] 2xl:text-sm cursor-pointer p-2 ${
                  hoveredDropdown === 2 ? "hovered" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
              >
                <Link href={"/tourism"}>
                  <span
                    className={`flex items-center gap-1 [&>svg]:w-[18px] [&>svg]:duration-200 [&>svg]:transition-all ${
                      hoveredDropdown === 2
                        ? "[&>svg]:rotate-180"
                        : "[&>svg]:rotate-0"
                    }`}
                  >
                    Достопримечательности <DownIcon />
                  </span>
                </Link>

                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredDropdown === 2 ? 1 : 0,
                    y: hoveredDropdown === 2 ? 10 : 20,
                  }}
                  transition={{ duration: 0.1 }}
                  className={`absolute  transition-all duration-500 bg-custom-blur text-black max-w-[600px] h-auto py-1 whitespace-nowrap left-0 rounded-lg ${
                    hoveredDropdown === 2 ? "" : "hidden"
                  }`}
                >
                  {travels.map(item => (
                    <motion.li key={item} whileHover={{ scale: 1.05 }}>
                      <Link href={`/tourism/${optimizePath(item)}`}>
                        <div className="font-semibold hover:bg-white 2xl:text-sm 2xl:py-1 xl:text-[15px] px-5 rounded-lg">
                          {item}
                        </div>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </li>

              <li className="p-2 xl:text-[15px] 2xl:text-sm cursor-pointer">
                <Link href={"/"}>О нас</Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-5">
            <SearchModal />

            <div className="flex items-center gap-1 text-white font-semibold">
              <Image
                src={RussiaFlag}
                alt="image"
                width={40}
                height={20}
                className="w-5"
              />
              <span>Uz</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
