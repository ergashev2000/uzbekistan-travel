"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import SearchModal from "./SearchModal";
import optimizePath from "@/util/optimizePath";
import { motion } from "framer-motion";

import { ArrowIcon, DownIcon, SearchIcon } from "@/assets/iconSvg";
import LogoWhite from "@/assets/images/logo_white.png";
import RussiaFlag from "@/assets/icons/russia-flag.svg";
import EnglishFlag from "@/assets/icons/english-flag.svg";

import { attractions } from "../../db.json";

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
  const pathname = usePathname();
  const params = useParams();
  const [lang, setLang] = useState(params?.locale);

  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleMouseEnter = (index: any) => {
    setHoveredDropdown(index);
  };

  const handleMouseLeave = () => {
    setHoveredDropdown(null);
  };

  const handleCheckLang = (e: any) => setLang(e.target.value);

  useEffect(() => {
    handleMouseLeave();
  }, [pathname]);

  return (
    <div className="fixed backdrop-blur bg-black bg-opacity-40 w-full z-20 transition-all duration-500 hidden xl:block">
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
                <Link href={"/attractions"}>
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
                  {attractions?.data.map(item => (
                    <motion.li key={item.id} whileHover={{ scale: 1.05 }}>
                      <Link href={`/attractions/${optimizePath(item.title)}`}>
                        <div className="font-semibold hover:bg-white 2xl:text-sm 2xl:py-1 xl:text-[15px] px-5 rounded-lg line-clamp-">
                          {item.title}
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

            <div className="relative text-white">
              <button
                className="text-[14px] gap-1 w-24 flex items-center"
                onClick={() => setIsChecked(prev => !prev)}
              >
                <Image
                  src={lang === "en" ? EnglishFlag : RussiaFlag}
                  alt="Flag Icon"
                  width={18}
                  height={18}
                />
                {lang === "en" ? "English" : "Русский"}
              </button>

              <div
                className={`w-max h-auto bg-white text-black shadow-md rounded absolute right-0 z-20 top-full text-[15px] py-1 px-3 mt-2 ${
                  isChecked ? "block" : "hidden"
                }`}
              >
                <h5 className="font-semibold px-1 pt-1">Select:</h5>
                <Link
                  href={`/${lang === "ru" ? "ru" : "en"}${pathname.substring(
                    3
                  )}`}
                  locale="en"
                  className="flex items-center gap-2 px-1"
                >
                  <input
                    type="radio"
                    id="lang-en"
                    name="lang"
                    onChange={handleCheckLang}
                    checked={lang === "en"}
                    className="my-2 bg-red-500 text-red-500"
                  />
                  <label
                    htmlFor="lang-en"
                    className="hover:text-red-500 transition-all duration-300 rounded cursor-pointer flex items-center gap-1"
                  >
                    <Image
                      src={EnglishFlag}
                      alt="lang icon"
                      width={18}
                      height={18}
                    />
                    English
                  </label>
                </Link>
                <Link
                  href={`/${lang === "en" ? "ru" : "en"}${pathname.substring(
                    3
                  )}`}
                  locale="ru"
                  className="flex items-center gap-2 p-1"
                >
                  <input
                    type="radio"
                    id="lang-ru"
                    name="lang"
                    checked={lang === "ru"}
                    onChange={handleCheckLang}
                  />
                  <label
                    htmlFor="lang-ru"
                    className="hover:text-red-500 transition-all duration-300 rounded cursor-pointer flex items-center gap-1"
                  >
                    <Image
                      src={RussiaFlag}
                      alt="lang icon"
                      width={18}
                      height={18}
                      className="shadow-lg"
                    />
                    Русский
                  </label>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
