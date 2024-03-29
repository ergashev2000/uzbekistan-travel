import Link from "next/link";

import CustomSwiper from "./SwiperCustom";
import BlogCard from "./BlogCard";
import { ArrowIcon } from "@/assets/iconSvg";

import { allblogs } from "../../db.json";
import { Fragment } from "react";
import { useTranslations } from "next-intl";

export default function Blog() {
  const t = useTranslations("Titles");
  return (
    <section>
      <div className="py-5 xl:py-14">
        <Link href={"/blogs"} className="block w-fit">
          <h2 className="xl:text-3xl 2xl:text-4xl text-lg font-semibold w-fit my-5 flex items-center gap-2 [&>div]:hover:ml-2 [&>div]:hover:opacity-100 transition-all duration-300 flex-wrap">
            <span className="text-[#FA7436]"> {t("blog")}</span>
            <div className="transition-all duration-300 opacity-0 ">
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
            {allblogs?.map(item => (
              <Fragment key={item.id}>
                <BlogCard data={item} />
              </Fragment>
            ))}
          </CustomSwiper>
        </div>
      </div>
    </section>
  );
}
