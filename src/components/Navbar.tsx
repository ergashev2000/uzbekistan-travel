import Image from "next/image";

import LogoWhite from "@/assets/images/logo-white.png";
import RussiaFlag from "@/assets/icons/russia-flag.svg";
import Link from "next/link";
import { SearchIcon } from "@/assets/iconSvg";

export default function Navbar() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 navbar w-full z-10">
      <div className="flex items-center justify-between container mx-auto py-2">
        <Link href={"/"}>
          <div className="w-32 h-14">
            <Image
              src={LogoWhite}
              alt="Uzbekistan travel logo"
              className="max-w-full"
            />
          </div>
        </Link>
        <div className="flex items-center gap-16 justify-between">
          <nav>
            <ul className="flex gap-10 items-center text-sm text-gray-100">
              <li>
                <Link href={"/"}>Shaharlar</Link>
              </li>
              <li>
                <Link href={"/"}>Sayyohlar uchun</Link>
              </li>
              <li>
                <Link href={"/"}>Turistik tashkilotlar uchun</Link>
              </li>
              <li>
                <Link href={"/"}>Diqqatga sazovor joylar</Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-5">
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <SearchIcon />
            </button>
            <div className="flex items-center gap-1">
              <Image
                src={RussiaFlag}
                alt="image"
                width={40}
                height={20}
                className=" w-5"
              />
              <span>Uz</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
