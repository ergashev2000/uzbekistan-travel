import { ArrowIcon } from "@/assets/iconSvg";
import Link from "next/link";
import React from "react";
import CustomSwiper from "./SwiperCustom";
import BlogCard from "./BlogCard";

export default function Blog() {
  return (
    <section>
      <div className="py-14">
        <Link href={"/"} passHref>
          <h2 className="text-[60px] xl:text-2xl 2xl:text-3xl font-semibold w-fit my-5 flex items-center gap-2 [&>div]:hover:ml-2 [&>div]:hover:opacity-100 transition-all duration-300">
            Get update with<span className="text-[#FA7436]">latest blog</span>
            <div className=" transition-all duration-300 opacity-0">
              <ArrowIcon />
            </div>
          </h2>
        </Link>

        <div className="default-swiper">
          <CustomSwiper
            slidesNumber={4}
            between={30}
            loop
            pagination
            navigation
          >
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </CustomSwiper>
        </div>
      </div>
    </section>
  );
}
