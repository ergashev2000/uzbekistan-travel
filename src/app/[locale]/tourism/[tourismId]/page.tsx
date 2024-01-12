"use client";

import DynamicHero from "@/components/DynamicHero";
import MainCard from "@/components/MainCard";
import Image from "next/image";

import data from "../../../../../db.json";
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

      <div className=" flex flex-row-reverse gap-5 xl:gap-10 py-5 xl:py-10">
        <article className="w-full lg:w-3/4 space-y-5 lg:space-y-10">
          <section id="0" ref={sectionRefs[0]}>
            {descriptionData.img && (
              <Image
                src={descriptionData.img}
                alt={descriptionData.seo_keywords}
                width={1000}
                height={1000}
                className="w-full rounded-lg h-[250px] xl:h-[500px] object-cover object-center"
              />
            )}
            <br />
            {descriptionData.description && (
              <p className="indent-8 text-[15px] lg:text-base lg:text-justify">
                {descriptionData.description}
              </p>
            )}
            {descriptionData?.description_list.length > 0 && (
              <ul className="space-y-3 py-2 text-[15px] lg:text-base ">
                {descriptionData?.description_list?.map((item: any, i: any) => (
                  <li key={i}>{item}</li>
                ))}
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
                className="rounded-lg w-full lg:h-[350px] h-[240px] xl:h-[500px] mb-5"
              ></iframe>
            )}
            {descriptionData?.media_desc?.map((item: any, i: any) => (
              <Fragment key={i}>
                <p className="indent-8 text-[15px] lg:text-base lg:text-justify">
                  {item}
                </p>
                <br />
              </Fragment>
            ))}
          </section>

          {sections?.map((item: any, i: any) => (
            <section key={i} id={i} ref={sectionRefs[i]}>
              {item.title && (
                <h2 className="text-lg md:text-xl xl:text-3xl font-semibold py-2">
                  {item.title.split(" ")[0]}{" "}
                  <span className="text-[#FA7436]">
                    {item.title.split(" ").slice(1).join(" ")}
                  </span>
                </h2>
              )}
              {item.description && (
                <p className="indent-8 text-[15px] lg:text-base  text-gray-700 lg:text-justify">
                  {item.description}
                </p>
              )}
              <br />
              <div className="flex flex-col gap-4">
                <div className="rounded-lg overflow-hidden w-full h-[240px] md:h-[350px] xl:h-[450px] flex justify-center items-center">
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
                      className="w-full text-[15px] lg:text-base  text-gray-700 lg:text-justify"
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
                    className="rounded-lg w-full md:-[350px] h-[240px] xl:h-[450px] my-2 xl:my-10 overflow-hidden"
                  ></iframe>
                )}
                {item.video_desc && (
                  <p className="indent-4 text-[15px] lg:text-base  text-gray-700 lg:text-justify">
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
  );
}
