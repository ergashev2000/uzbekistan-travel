"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

import LogoWhite from "@/assets/images/logo_white.svg";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/assets/iconSvg";
import LangChange from "./LangChange";

export default function NavbarMenu() {
  const [mobileNav, setMobileNav] = useState(false);
  const pathname = usePathname();

  const t = useTranslations("Navigation");

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  useEffect(() => {
    setMobileNav(false)
  }, [pathname]);
  

  return (
    <header className="sticky top-0 inset-x-0 p-3 bg-black/50 z-20 flex justify-between items-center xl:hidden">
      <nav className="w-10">
        <motion.button
          initial="hide"
          animate={mobileNav ? "show" : "hide"}
          onClick={toggleMobileNav}
          className="flex flex-col space-y-1 relative z-10"
        >
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: 45,
                y: 5,
              },
            }}
            className="w-6 bg-white h-px block"
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                opacity: 1,
              },
              show: {
                opacity: 0,
              },
            }}
            className="w-6 bg-white h-px block"
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: -45,
                y: -5,
              },
            }}
            className="w-6 bg-white h-px block"
          ></motion.span>
        </motion.button>
        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: "spring",
                bounce: 0.1,
              }}
            >
              <motion.div
                key="mobile-nav"
                variants={{
                  hide: {
                    x: "-100%",
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      when: "afterChildren",
                      staggerChildren: 0.25,
                    },
                  },
                  show: {
                    x: "0%",
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      when: "beforeChildren",
                      staggerChildren: 0.25,
                    },
                  },
                }}
                initial="hide"
                animate="show"
                exit="hide"
                className="fixed inset-0 bg-black p-6 flex flex-col justify-center space-y-10 lg:hidden"
              >
                <motion.ul
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="list-none space-y-6"
                >
                  <li>
                    <Link
                      href={"/cities"}
                      className="text-3xl font-semibold text-white"
                    >
                      {t("cities")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/tourism"}
                      className="text-3xl font-semibold text-white"
                    >
                      {t("tourismAll")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/attractions"}
                      className="text-3xl font-semibold text-white"
                    >
                      {t("attractions")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/foto-galereya"}
                      className="text-3xl font-semibold text-white"
                    >
                      {t("gallery")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/about"}
                      className="text-3xl font-semibold text-white"
                    >
                      {t("about")}
                    </Link>
                  </li>
                </motion.ul>
                <motion.div
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="w-full h-px bg-white/30"
                ></motion.div>
                <motion.ul
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="list-none flex justify-center gap-x-4"
                >
                  <li>
                    <Link href={"https://www.instagram.com/"}>
                      <div className="bg-white rounded-lg w-8 h-8 flex justify-center items-center">
                        <InstagramIcon />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href={"https://www.youtube.com/"}>
                      <div className="bg-white rounded-lg w-8 h-8 flex justify-center items-center">
                        <YoutubeIcon />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href={"https://facebook.com/"}>
                      <div className="bg-white rounded-lg w-8 h-8 flex justify-center items-center">
                        <FacebookIcon />
                      </div>
                    </Link>
                  </li>
                </motion.ul>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </nav>
      <Link href={"/"}>
        <Image
          src={LogoWhite}
          alt="Logo"
          width={100}
          height={30}
          className="w-20"
        />
      </Link>
      <div>
        <LangChange />
      </div>
    </header>
  );
}
