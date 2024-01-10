import Link from "next/link";
import React, { Fragment } from "react";

export default function DynamicHero({ header }: { header?: any }) {
  console.error(header.banner_img);
  
  return (
    <div
      className={`h-[65vh] relative bg-no-repeat bg-center w-full bg-cover -z-0 `}
      style={{ backgroundImage: `url(${header?.banner_img})`}}
    >
      <div className="absolute w-full h-full bg-black bg-opacity-10" />
      <div className="container mx-auto h-full w-full flex items-center">
        <div className="text-white space-y-5 z-10">
          <p>
            <Link href={"/"}> Home </Link>
            {header?.slug?.map((item: any) => (
              <Fragment key={item.id}>
                {item.slug_path ? (
                  <Link href={item.slug_path}>/ {item.slug_title} </Link>
                ) : (
                  <> / {item.slug_title} </>
                )}
              </Fragment>
            ))}
          </p>
          <h2 className="text-[60px] font-semibold">{header?.title}</h2>
          <p>{header?.description}</p>
        </div>
      </div>
    </div>
  );
}
