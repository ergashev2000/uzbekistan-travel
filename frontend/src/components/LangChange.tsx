import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import RussiaFlag from "@/assets/icons/russia-flag.svg";
import EnglishFlag from "@/assets/icons/english-flag.svg";
import Link from "next/link";

export default function LangChange() {
  const params = useParams();
  const pathname = usePathname();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [lang, setLang] = useState(params?.locale);

  const handleCheckLang = (e: any) => setLang(e.target.value);

  return (
    <>
      <div className="relative text-white">
        <button
          className="text-[14px] gap-1 w-fit flex items-center"
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
          className={`w-max h-auto bg-white text-black shadow-md rounded absolute right-0 top-full text-[15px] py-1 px-3 mt-2 ${
            isChecked ? "block" : "hidden"
          }`}
        >
          <h5 className="font-semibold px-1 pt-1">Select:</h5>
          <Link
            href={`/en/${pathname.substring(3)}`}
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
              <Image src={EnglishFlag} alt="lang icon" width={18} height={18} />
              English
            </label>
          </Link>
          <Link
            href={`/ru/${pathname.substring(3)}`}
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
    </>
  );
}
