"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

import { detail_attractions } from "../../../../db.json";

import optimizePath from "@/util/optimizePath";
import MenuSteps from "@/components/MenuSteps";
import CustomSwiper from "@/components/SwiperCustom";
import DynamicHero from "@/components/DynamicHero";
import MainCard from "@/components/MainCard";
import Link from "next/link";

interface Section {
  id: number;
  img: string;
  img_tags: string;
  video: string;
  paragraphs: string[];
  description: string;
  video_desc: string;
}

export default function Page() {
  const { attractionId } = useParams();
  const [sections, setSections] = useState<Section[]>([]);
  const [headerData, setHeaderData] = useState({
    city: "",
    map_img: "",
    title: "",
    map: ''
  });

  useEffect(() => {
    const resData = detail_attractions?.find(
      (item: any) => optimizePath(item.header.title) === attractionId
    );

    if (resData) {
      const { data, header } = resData;

      setSections(data);
      setHeaderData(header);
    }
  }, [attractionId]);

  return (
    <div className="min-h-screen">
      <DynamicHero header={headerData} />

      <div className="container mx-auto">
        <div className=" flex gap-5 p-10">
          <article className="w-3/4 space-y-2">
            {sections?.map((item: any, i: any) => (
              <section key={i}>
                {item.description && (
                  <p className="indent-8 xl:text-sm 2xl:text-base text-gray-700 text-justify">
                    {item.description}
                  </p>
                )}
                <br />
                <div className="flex flex-col gap-4">
                  <div className="rounded-lg overflow-hidden h-fit w-full xl:h-[400px] 2xl:h-[520px] flex justify-center items-center">
                    {item.img && (
                      <Image
                        src={item.img}
                        alt={item.img_tags}
                        title={item.title}
                        className="w-full rounded-lg object-cover object-center transition-all duration-700"
                        width={1280}
                        height={720}
                        loading="lazy"
                      />
                    )}
                  </div>
                  {item.paragraphs.length > 0 &&
                    item.paragraphs?.map((item: any, i: any) => (
                      <p
                        key={i}
                        className="w-full xl:text-sm 2xl:text-base text-gray-700 text-justify"
                      >
                        {item}
                        <br />
                      </p>
                    ))}
                  {item.video && (
                    <iframe
                      src={item.video}
                      width="1280"
                      height="720"
                      allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                      allowFullScreen
                      className="rounded-lg w-full h-[500px] my-10 overflow-hidden"
                    ></iframe>
                  )}
                  {item.video_desc && (
                    <p className="indent-4 xl:text-sm 2xl:text-base text-gray-700 text-justify">
                      {item.video_desc}
                    </p>
                  )}
                </div>
              </section>
            ))}

            {headerData?.map && (
              <section>
                <h2 className="text-3xl font-semibold py-5 mt-10">Map</h2>
                <iframe
                  src={headerData?.map}
                  width="1200"
                  height="500"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full rounded-xl"
                ></iframe>
              </section>
            )}
          </article>

          <aside className="w-1/4 bg-white sticky top-20 h-fit p-5 border border-gray-300 rounded-lg">
            {headerData?.city && (
              <div className="flex items-center justify-between gap-2">
                <h4>Область</h4>{" "}
                <Link href={`/cities/${optimizePath(headerData?.city)}`}>
                  <span className="text-blue-600"> {headerData?.city}</span>
                </Link>
              </div>
            )}
            {headerData?.map_img && (
              <Image
                src={headerData?.map_img}
                alt={headerData?.title}
                width={400}
                height={400}
                className="w-full rounded-lg my-5"
              />
            )}
          </aside>
        </div>
        <div className="py-14">
          <h3 className="text-2xl font-semibold">
            Другие виды<span className="text-[#FA7436]"> туризм</span>
          </h3>
          <div className="default-swiper">
            {/* <CustomSwiper>
              {filterRes?.map((item: any) => (
                <Fragment key={item.id}>
                  <MainCard data={item} />
                </Fragment>
              ))}
            </CustomSwiper> */}
          </div>
        </div>
      </div>
    </div>
  );
}
