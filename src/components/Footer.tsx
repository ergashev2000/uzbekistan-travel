import Image from "next/image";
import Link from "next/link";

import { footerMenus } from "@/util/contentMenus";

import LogoFooter from "@/assets/images/logo_white.svg";
import {
  FacebookIcon,
  InstagramIcon,
  MapPinIcon,
  YoutubeIcon,
} from "@/assets/iconSvg";

export default function Footer() {
  return (
    <footer>
      <div className="bg-black text-white w-full pt-12 pb-5">
        <div>
          <div className="container mx-auto flex gap-5 px-2 max-xl:flex-col-reverse">
            <div className="space-y-5 w-2/5 max-xl:w-full">
              <Link href={"/"} className="max-xl:hidden">
                <Image
                  src={LogoFooter}
                  alt="uzbekistan travel logo"
                  width={1000}
                  height={1000}
                  className="w-44"
                />
              </Link>
              <div className="flex gap-5 py-5 max-xl:flex-col">
                <div>
                  <Link href={"tel+998909686858"}>
                    <span className="text-sm font-semibold underline-animation hover:text-[#FA7436] transition-all duration-300">
                      +998(90) 968 68 58
                    </span>
                  </Link>
                  <p className="text-[14px] text-gray-500">
                    Workhours: 9:00-18:00,
                    <br /> Mn-Fr
                  </p>
                </div>
                <div>
                  <Link href={"mailto: mn-frinfo@nationalprcentre.com"}>
                    <span className="text-sm font-semibold underline-animation hover:text-[#FA7436] transition-all duration-300">
                      mn-frinfo@nationalprcentre.com
                    </span>
                  </Link>
                  <p className="text-[14px] text-gray-500">For any questions</p>
                </div>
              </div>
              <Link href={"/"}>
                <p className="text-sm font-semibold flex items-center gap-2">
                  <MapPinIcon />
                  <span>
                    18, Oybek str., Tashkent, 100015, <br /> Tashkent Uzbekistan
                  </span>
                </p>
              </Link>
              <p className="text-sm">
                Unified Call-center for safe tourism -{" "}
                <Link href={"/"}>
                  <span className="font-semibold text-[#FA7436]">1173</span>
                </Link>
              </p>

              <ul className="flex gap-5 items-center max-xl:justify-center">
                <li>
                  <Link href={"https://www.instagram.com/"}>
                    <span className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center text-black hover:bg-[#ea6070] hover:text-white transition-all duration-500">
                      <InstagramIcon />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href={"https://facebook.com/"}>
                    <span className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center text-black hover:bg-[#4267B2] hover:text-white transition-all duration-500">
                      <FacebookIcon />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href={"https://www.youtube.com/"}>
                    <span className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center text-black hover:bg-[#c4302b] hover:text-white transition-all duration-500">
                      <YoutubeIcon />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex gap-5 justify-around w-3/5 max-xl:w-full max-xl:flex-col max-xl:items-center">
              <Link href={"/"} className="max-xl:block hidden">
                <Image
                  src={LogoFooter}
                  alt="uzbekistan travel logo"
                  width={1000}
                  height={1000}
                  className="w-44"
                />
              </Link>
              {footerMenus.map((menus, i) => (
                <ul
                  key={i}
                  className="w-1/3 text-gray-300  text-[16px] [&>li]:w-fit space-y-2 max-lg:w-full max-lg:flex justify-center flex-col items-center"
                >
                  {menus.map((menu, j) => (
                    <li
                      key={menu.id}
                      className="first:text-lg max-xl:w-fit  first:text-white first:font-semibold underline-animation first:before:bg-transparent [&>a]:first:cursor-default"
                    >
                      {j === 0 ? (
                        <h3>{menu.menu}</h3>
                      ) : (
                        <Link href={menu.slug}>
                          <h3>{menu.menu}</h3>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <p className="pt-10 text-center text-sm text-gray-200">
            Copyright © 2023. Create by Islomjon
          </p>
        </div>
      </div>
    </footer>
  );
}
