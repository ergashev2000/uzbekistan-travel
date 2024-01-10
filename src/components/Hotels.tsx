import { ArrowIcon, MapPinIcon } from "@/assets/iconSvg";
import Link from "next/link";
import React from "react";
import CustomSwiper from "./SwiperCustom";
import Image from "next/image";

export default function Hotels() {
  return (
    <section>
      <div className="py-10">
        <Link
          href={"https://uzbekistan.travel/en/"}
          className="bg-red-500 py-5"
        >
          <h2 className="text-xl xl:text-2xl 2xl:text-3xl font-semibold w-fit mb-5 flex items-center gap-2 [&>div]:hover:ml-2 [&>div]:hover:opacity-100 transition-all duration-300">
            Order <span className="text-[#FA7436]">the best hotel in town</span>
            <div className=" transition-all duration-300 opacity-0">
              <ArrowIcon />
            </div>
          </h2>
        </Link>
        <div className="default-swiper">
          <CustomSwiper between={30} slidesNumber={2.6} navigation loop>
            {Array.from({ length: 5 })
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="w-full max-w-lg h-44 rounded-lg p-3 shadow flex items-center gap-3 border-4 border-white"
                >
                  <div className="relative max-w-[240px] w-full h-full">
                    <Image
                      src={
                        "https://firebasestorage.googleapis.com/v0/b/uzbekistan-travel-ea70f.appspot.com/o/491418850.jpg?alt=media&token=d3bb8213-1112-4fdf-98af-abd8f6f8c8ca"
                      }
                      alt="img"
                      width={200}
                      height={100}
                      className="w-full object-cover rounded-md h-full"
                    />
                    <span className="absolute bottom-2 right-2 bg-[#FA7436] w-6 flex justify-center items-center text-sm h-6 rounded shadow text-white">
                      9.1
                    </span>
                  </div>
                  <div className="flex flex-col h-full justify-between p-1">
                    <div>
                      <h3 className="text-lg font-semibold">
                        Hilton Tashkent City
                      </h3>
                      <p className="text-sm line-clamp-3">
                        Get the celebrity treatment with world-class service at
                        Hilton Tashkent City
                      </p>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <p className="flex items-center gap-1 text-gray-500 text-[14px]">
                        <MapPinIcon />
                        Tashkent
                      </p>
                      <Link
                        href={
                          "https://www.booking.com/searchresults.en-gb.html?aid=356938&label=metagha-link-LUUZ-hotel-1995283_dev-desktop_los-1_bw-8_dow-Friday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-6641364928_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20240112_ppt-_lp-1028523_r-1062876174990880672&utm_medium=localuniversal&hca=m&no_rooms=1&show_room=199528302_269950240_2_2_0&utm_content=dev-desktop_los-1_bw-8_dow-Friday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-6641364928_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20240112_ppt-&utm_campaign=UZ&edgtid=6oKpaYvYTFqL6uHld9qA8g&utm_term=hotel-1995283&gclid=Cj0KCQiAy9msBhD0ARIsANbk0A-Wp5Dr1DySpwHWuwz4E2Ply8a3PJgvwBKDc3WfzmgCNTwOArRBbYsaAuRzEALw_wcB&ext_price_total=2093562.75&efpc=FpthoWm2Gi8&utm_source=metagha&ts=1704376596&highlighted_hotels=1995283&checkin=2024-01-12&redirected=1&city=-2579372&hlrd=with_dates&group_adults=2&source=hotel&group_children=0&checkout=2024-01-13&keep_landing=1&sid=0a4117c37dd3fe32d268422e0df84bf3"
                        }
                        target="_blank"
                      >
                        <button className="px-4 text-sm whitespace-nowrap py-2 rounded-full bg-[#FA7436] border border-[#FA7436] hover:bg-transparent transition-all duration-500 text-white hover:text-black font-semibold">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </CustomSwiper>
        </div>
      </div>
    </section>
  );
}
