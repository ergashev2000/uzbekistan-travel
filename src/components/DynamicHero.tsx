import Link from "next/link";
import React, { Fragment } from "react";

export default function DynamicHero({ header }: { header?: any }) {

  return (
    <div className="xl:pt-20 2xl:pt-24">
      <div className="text-sm font-semibold items-center flex flex-wrap gap-2 pb-2 lg:pb-5 max-xl:text-[14px]">
        <Link href={"/"}> Главная</Link>
        {header?.slug?.map((item: any) => (
          <Fragment key={item.id}>
            {item.slug_path ? (
              <Link href={item.slug_path}>/ {item.slug_title} </Link>
            ) : (
              <> / {item.slug_title} </>
            )}
          </Fragment>
        ))}
      </div>
      <div
        className={`h-[220px] md:h-[350px] xl:h-[65vh] relative overflow-hidden rounded-2xl bg-no-repeat bg-center w-full bg-cover -z-0 `}
        style={{ backgroundImage: `url(${header?.banner_img})` }}
      >
        <div className="bg-black absolute bg-opacity-40 left-0 top-0 w-full h-full"></div>
        <div className="text-white absolute bottom-2 left-2 space-y-10 max-xl:space-y-2 w-1/2 md:left-5 md:bottom-5 xl:bottom-10 xl:left-10 max-xl:w-full">
          <h2 className="text-4xl font-semibold max-xl:text-lg">
            {header?.title}
          </h2>
          <p className="max-xl:text-[14px] w-full">{header?.description}</p>
        </div>
      </div>
    </div>
  );
}
