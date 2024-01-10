"use client";

import DynamicHero from "@/components/DynamicHero";
import MainCard from "@/components/MainCard";
import Image from "next/image";

import data from "../../../../db.json";
import { useParams } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
import optimizePath from "@/util/optimizePath";
import MenuSteps from "@/components/MenuSteps";
import CustomSwiper from "@/components/SwiperCustom";

interface Section {
  id: number;
  title: string;
  description: string;
  video: string;
  img: string;
  media_desc: string[];
  video_desc: string;
}

interface DescriptionData {
  title: string;
  description: string;
  description_list: string[];
  video: string;
  img: string;
  media_desc: string[];
  seo_keywords: string;
  video_desc?: string;
}

interface FilterRes {
  id: number;
  title: string;
  img: string;
  slug: string;
}
export default function Page() {
  const { tourismId } = useParams();
  const [sections, setSections] = useState<Section[]>([]);
  const [headerData, setHeaderData] = useState({});
  const [titles, setTitles] = useState<string[]>([]);
  const [filterRes, setFilterRes] = useState<FilterRes[]>([]);

  const [descriptionData, setDescriptionData] = useState<DescriptionData>({
    title: "",
    description: "",
    description_list: [],
    video: "",
    img: "",
    media_desc: [],
    seo_keywords: "",
    video_desc: "",
  });
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    const resData = data.tourism.find(
      (item: any) => optimizePath(item.header.title) === tourismId
    );
    const res = data.alltourism.data.filter(
      (item: any) => optimizePath(item.title) !== tourismId
    );

    setFilterRes(res);
    if (resData) {
      const {
        data: { sections, description },
        header,
      } = resData;

      const titlesArray = sections.map(obj => obj.title);
      setTitles(titlesArray);
      setSections(sections);
      setDescriptionData(description);
      setHeaderData(header);
    }
  }, [tourismId]);

  return (
    <div className="min-h-screen">
      <DynamicHero header={headerData} />

      <div className="container mx-auto">
        <div className=" flex gap-5 p-10">
          <article className="w-3/4 space-y-10">
            <section id="0" ref={sectionRefs[0]}>
              {descriptionData.img && (
                <Image
                  src={descriptionData.img}
                  alt={descriptionData.seo_keywords}
                  width={1000}
                  height={1000}
                  className="w-full rounded-lg h-[500px] object-cover object-center"
                />
              )}
              <br />
              {descriptionData.description && (
                <p className="indent-8 text-justify">
                  {descriptionData.description}
                </p>
              )}
              {descriptionData?.description_list.length > 0 && (
                <ul className="space-y-3 py-2">
                  {descriptionData?.description_list?.map(
                    (item: any, i: any) => (
                      <li key={i}>{item}</li>
                    )
                  )}
                </ul>
              )}
              <br />
              {descriptionData.video && (
                <iframe
                  src={descriptionData.video}
                  width="1280"
                  height="720"
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                  allowFullScreen
                  className="rounded-lg w-full h-[500px] mb-5"
                ></iframe>
              )}
              {descriptionData?.media_desc?.map((item: any, i: any) => (
                <>
                  <p key={i} className="text-justify">
                    {item}
                  </p>
                  <br />
                </>
              ))}
            </section>

            {sections?.map((item: any, i: any) => (
              <section key={i} id={i} ref={sectionRefs[i]}>
                {item.title && (
                  <h2 className="text-3xl font-semibold py-2">
                    {item.title.split(" ")[0]}{" "}
                    <span className="text-[#FA7436]">
                      {item.title.split(" ").slice(1).join(" ")}
                    </span>
                  </h2>
                )}
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
                        alt={item.title}
                        title={item.title}
                        className="w-full rounded-lg object-cover object-center transition-all duration-700"
                        width={1000}
                        height={1000}
                      />
                    )}
                  </div>
                  {item.media_desc.length > 0 &&
                    item.media_desc?.map((item: any, i: any) => (
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
          </article>

          <MenuSteps sectionNum={8} sectionRefs={sectionRefs} titles={titles} />
        </div>
        <div className="py-14">
          <h3 className="text-2xl font-semibold">
            Другие виды<span className="text-[#FA7436]"> туризм</span>
          </h3>
          <div className="default-swiper">
            <CustomSwiper>
              {filterRes?.map((item: any) => (
                <Fragment key={item.id}>
                  <MainCard data={item} />
                </Fragment>
              ))}
            </CustomSwiper>
          </div>
        </div>
      </div>
    </div>
  );
}
