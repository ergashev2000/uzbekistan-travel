import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import DynamicHero from "@/components/DynamicHero";
import CustomSwiper from "@/components/SwiperCustom";
import optimizePath from "@/util/optimizePath";
import { ArrowIcon } from "@/assets/iconSvg";
import data from "../../../../db.json";

export default function page() {
  return (
    <div className="min-h-screen">
      <DynamicHero header={data.galereya.header} />
      <div className="container mx-auto py-10">
        {data.galereya.data?.map((item: any, index: any) => (
          <Fragment key={item.index}>
            <Link
              href={`/foto-galereya/${optimizePath(item?.header?.title)}`}
              className="w-fit block"
            >
              <h2 className="text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold w-fit">
                <span className="flex items-center gap-2 [&>div]:hover:ml-2 [&>div]:hover:opacity-100 transition-all duration-300 w-fit">
                  Посмотреть все фотографии о городе <ArrowIcon />
                </span>
              </h2>
            </Link>
            <div className="default-swiper">
              <CustomSwiper slidesNumber={3.5} between={20} navigation>
                {item?.data?.map((item: any) => (
                  <Link
                    href={`/foto-galereya/${optimizePath(item.city_category)}`}
                    key={item.id}
                  >
                    <div className="max-w-md w-full relative group cursor-pointer overflow-hidden rounded-lg">
                      <span className="left-0 top-0 absolute w-full h-full bg-black bg-opacity-50 group-hover:opacity-100 opacity-0 transition-all duration-500"></span>
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={1000}
                        height={1000}
                        className="w-full h-52 rounded-lg object-cover object-center"
                      />
                      <h3 className="text-xl font-semibold absolute bottom-3 left-3 group-hover:opacity-100 opacity-0 text-white transition-all duration-500">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </CustomSwiper>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
