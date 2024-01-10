import Link from "next/link";
import CustomSwiper from "./SwiperCustom";
import { ArrowIcon } from "@/assets/iconSvg";
import MainCard from "./MainCard";

import {alltourism} from '../../db.json'
import { Fragment } from "react";

export default function Attractions() {
  return (
    <section>
      <div className="py-10">
        <Link href={"/"} className="w-fit block">
          <h2 className="text-[60px] xl:text-2xl 2xl:text-3xl font-semibold w-fit my-5 flex items-center gap-2 [&>div]:hover:ml-2 [&>div]:hover:opacity-100 transition-all duration-300">
            Tourism fo<span className="text-[#FA7436]">all</span>
            <div className=" transition-all duration-300 opacity-0">
              <ArrowIcon />
            </div>
          </h2>
        </Link>

        <div className="default-swiper">
          <CustomSwiper
            navigation
            between={30}
            // autoplay={5000}
            slidesNumber={2.5}
            loop
          >
            {alltourism.data?.map((item: any) => (
              <Fragment key={item.id}>
                <MainCard data={item} />
              </Fragment>
            ))}
          </CustomSwiper>
        </div>
      </div>
    </section>
  );
}
