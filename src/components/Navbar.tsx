"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

import SearchModal from "./SearchModal";
import optimizePath from "@/util/optimizePath";
import NavbarMenu from "./NavbarMenu";
import LangChange from "./LangChange";

import { DownIcon } from "@/assets/iconSvg";
import LogoWhite from "@/assets/images/logo_white.png";

import { attractions, cityMenuRu, travelsRu } from "../../db.json";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const handleMouseEnter = (index: any) => setHoveredDropdown(index);

  const handleMouseLeave = () => setHoveredDropdown(null);

  return (
    <>
      <NavbarMenu />

      <div className="fixed backdrop-blur bg-black bg-opacity-40 w-full z-20 transition-all duration-500 hidden xl:block">
        <div className="flex items-center justify-between container mx-auto py-2 ">
          <Link href={"/"}>
            <div className="xl:w-28 2xl:w-40 w-28">
              <Image
                src={LogoWhite}
                alt="Uzbekistan travel logo"
                className="w-full"
                width={100}
                height={40}
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
                      {t("cities")} <DownIcon />
                    </span>
                  </Link>
                  <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredDropdown === 0 ? 1 : 0,
                      y: hoveredDropdown === 0 ? 10 : 20,
                    }}
                    transition={{ duration: 0.1 }}
                    className={`absolute  transition-all duration-500 bg-custom-blur text-black max-w-[600px] h-auto py-1 whitespace-nowrap left-0 top-6 rounded-lg ${
                      hoveredDropdown === 0 ? "" : "hidden"
                    }`}
                  >
                    {cityMenuRu.map(item => (
                      <motion.li key={item} whileHover={{ scale: 1.05 }}>
                        <Link href={`/cities/${optimizePath(item)}`}>
                          <div className="font-semibold hover:bg-white 2xl:text-sm 2xl:py-2 py-1 xl:text-[15px] px-5 rounded-lg">
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
                      {t("tourismAll")} <DownIcon />
                    </span>
                  </Link>

                  <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredDropdown === 1 ? 1 : 0,
                      y: hoveredDropdown === 1 ? 10 : 20,
                    }}
                    transition={{ duration: 0.1 }}
                    className={`absolute  transition-all duration-500 bg-custom-blur text-black max-w-[600px] h-auto py-1 whitespace-nowrap top-6 left-0 rounded-lg ${
                      hoveredDropdown === 1 ? "" : "hidden"
                    }`}
                  >
                    {travelsRu.map(item => (
                      <motion.li key={item} whileHover={{ scale: 1.05 }}>
                        <Link href={`/tourism/${optimizePath(item)}`}>
                          <div className="font-semibold hover:bg-white 2xl:text-sm 2xl:py-2 py-1 xl:text-[15px] px-5 rounded-lg">
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
                      {t("attractions")} <DownIcon />
                    </span>
                  </Link>

                  <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredDropdown === 2 ? 1 : 0,
                      y: hoveredDropdown === 2 ? 10 : 20,
                    }}
                    transition={{ duration: 0.1 }}
                    className={`absolute  transition-all duration-500 bg-custom-blur text-black max-w-[600px] h-auto py-1 whitespace-nowrap top-6 left-0 rounded-lg ${
                      hoveredDropdown === 2 ? "" : "hidden"
                    }`}
                  >
                    {attractions?.data.map(item => (
                      <motion.li key={item.id} whileHover={{ scale: 1.05 }}>
                        <Link href={`/attractions/${optimizePath(item.title)}`}>
                          <div className="font-semibold hover:bg-white 2xl:text-sm 2xl:py-2 py-1 xl:text-[15px] px-5 rounded-lg line-clamp-">
                            {item.title}
                          </div>
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </li>
                <li className="p-2 xl:text-[15px] 2xl:text-sm cursor-pointer">
                  <Link href={"/foto-galereya"}>{t("gallery")}</Link>
                </li>

                <li className="p-2 xl:text-[15px] 2xl:text-sm cursor-pointer">
                  <Link href={"/about"}>{t("about")}</Link>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-5">
              <SearchModal />

              <LangChange />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
