import Link from "next/link";
import React, { Fragment } from "react";

export default function DynamicHero({ header }: { header?: any }) {
  console.error(header.banner_img);

  return (
    <div>
      <div className="text-sm font-semibold items-center flex gap-2 pb-5">
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
        className={`h-[65vh] relative overflow-hidden rounded-2xl bg-no-repeat bg-center w-full bg-cover -z-0 `}
        style={{ backgroundImage: `url(${header?.banner_img})` }}
      >
        <div className="bg-black absolute bg-opacity-40 left-0 top-0 w-full h-full"></div>
        <div className="text-white absolute bottom-16 left-10 space-y-10 w-1/2">
          <h2 className="text-[60px] font-semibold">{header?.title}</h2>
          <p>{header?.description}</p>
        </div>
      </div>
    </div>
  );
}
