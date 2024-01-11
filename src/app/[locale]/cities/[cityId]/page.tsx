"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";

import DynamicHero from "@/components/DynamicHero";
import MainCard from "@/components/MainCard";
import MenuSteps from "@/components/MenuSteps";
import CustomSwiper from "@/components/SwiperCustom";
import optimizePath from "@/util/optimizePath";

import { ArrowIcon, CheckedIcon } from "@/assets/iconSvg";
import data from "../../../../../db.json";

type Section = {
  id: number;
  title: string;
  description: string;
  video: string;
  img: string;
  media_desc: string[];
  video_desc: string;
  banner_img?: string;
  description_list?: string[];
  images?: string[];
  image_3d?: string;
  zones?: string[];
  img_desc?: string;
  map_url?: string;
};

type Sections = {
  about?: Section;
  attractions?: Section;
  gallery?: Section;
  climate?: Section;
  cuisine?: Section;
  photo_zones?: Section;
  history?: Section;
  map?: Section;
};

export default function Page() {
  const { cityId } = useParams();
  const [sections, setSections] = useState<Sections>({});
  const [headerData, setHeaderData] = useState({});
  const [titles, setTitles] = useState<string[]>([]);

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
    if (cityId && data) {
      const resData = data.cities.find(
        (item: any) => optimizePath(item.header.title) === cityId
      );

      if (resData) {
        const { data, header, menus } = resData;

        setTitles(menus);
        setSections(data as unknown as Sections);
        setHeaderData(header);
      }
    }
  }, [cityId]);

  if (!sections) {
    return "loading...";
  }

  return (
    <div className="min-h-screen">
      <DynamicHero header={headerData} />

      <div className="flex gap-5 p-10 max-xl:py-2 max-xl:px-0">
        <article className="w-3/4 space-y-10 max-xl:w-full max-xl:space-y-3">
          <section id="0" ref={sectionRefs[0]}>
            <h2 className="xl:text-3xl font-semibold text-lg">
              {sections.about?.title}
            </h2>
            <p className="py-2">{sections.about?.description}</p>
            {sections.about?.banner_img && (
              <Image
                src={sections.about?.banner_img}
                alt={sections.about?.title}
                width={1000}
                height={1000}
                className="w-full h-[500px] object-cover rounded-lg max-xl:h-[200px]"
              />
            )}
            <p className="py-5">{sections.about?.description_list}</p>
          </section>

          <section id="1" ref={sectionRefs[1]}>
            <h3 className="text-2xl font-semibold py-2">
              {sections.attractions?.title}
            </h3>
            <p className="py-2">{sections.attractions?.description}</p>
            <ul className="space-y-4 pb-5">
              {sections.attractions?.description_list?.map((item: any) => (
                <li className="flex gap-2" key={item}>
                  <CheckedIcon />
                  {item}
                </li>
              ))}
            </ul>

            <iframe
              width="1091"
              height="480"
              src={sections.attractions?.video}
              title="Invest in Tashkent"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-[500px] rounded-lg max-xl:h-[200px]"
            />
          </section>

          <section id="2" ref={sectionRefs[2]}>
            <h3 className="text-2xl font-semibold py-3 pt-10">
              {sections.gallery?.title}
            </h3>
            <p className="text-sm text-gray-600">
              {sections.gallery?.description}
            </p>
            <div className="flex items-center gap-5 py-5 max-xl:flex-col">
              {sections.gallery?.images?.map((item: any, i: any) => (
                <div className="w-1/3 h-[220px] max-xl:w-full" key={i}>
                  <Image
                    src={item}
                    alt="salom"
                    width={1000}
                    height={1000}
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
              ))}
            </div>

            <div>
              <iframe
                src={sections.gallery?.image_3d}
                frameBorder="0"
                className="w-full h-[500px] max-xl:h-[200px]"
              />
            </div>
          </section>

          <section id="3" ref={sectionRefs[3]}>
            <h3 className="text-2xl font-semibold py-3">
              {sections.climate?.title}
            </h3>
            <p>{sections.climate?.description}</p>
          </section>

          <section id="4" ref={sectionRefs[4]}>
            <h3 className="text-2xl font-semibold py-3">
              {sections.cuisine?.title}
            </h3>
            <p>{sections.cuisine?.description}</p>

            <div className="flex items-center gap-5 py-5 max-xl:flex-col">
              {sections.cuisine?.images?.map((item: any, i: any) => (
                <div className="w-1/3 h-[220px] max-xl:w-full" key={i}>
                  <Image
                    src={item}
                    alt="salom"
                    width={1000}
                    height={1000}
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          <section id="5" ref={sectionRefs[5]}>
            <h3 className="text-2xl font-semibold py-3">
              {sections.photo_zones?.title}
            </h3>
            <p>{sections.photo_zones?.description}</p>
            {sections.photo_zones?.zones?.map((item: any) => (
              <div className="max-w-full py-5" key={item.id}>
                <Image
                  src={item.zone_image}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-[500px] max-xl:h-[200px] rounded-lg"
                  title="seo uchun"
                />
                <p className=" py-2 text-sm">
                  <em>{item.img_desc}</em>
                </p>
              </div>
            ))}
          </section>

          <section id="6" ref={sectionRefs[6]}>
            <h3 className="text-2xl font-semibold py-3">
              {sections.history?.title}
            </h3>

            <p>{sections.history?.description}</p>

            <div className="max-w-full py-5">
              {sections.history?.img && (
                <Image
                  src={sections.history?.img}
                  alt={sections.history?.title}
                  width={1000}
                  height={1000}
                  className="w-full h-[500px] rounded-lg"
                  title="seo uchun"
                />
              )}
              <p className=" py-2 text-sm">
                <em>{sections.history?.img_desc}</em>
              </p>
            </div>
          </section>
          <section id="7" ref={sectionRefs[7]}>
            <h3 className="text-2xl font-semibold py-3">
              {sections.map?.title}
            </h3>
            <iframe
              src={sections.map?.map_url}
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[500px] rounded-lg my-5"
            />
          </section>
        </article>

        <MenuSteps
          sectionNum={titles.length}
          sectionRefs={sectionRefs}
          titles={titles}
        />
      </div>

      <div className="py-10">
        <Link href={"/cities"} className="w-fit block">
          <h2 className="text-xl xl:text-2xl 2xl:text-3xl font-semibold w-max flex items-center gap-2 [&>div]:hover:ml-2 [&>div]:hover:opacity-100 transition-all duration-300">
            Other cities in <span className="text-[#FA7436]">Uzbekistan</span>
            <div className=" transition-all duration-300 opacity-0">
              <ArrowIcon />
            </div>
          </h2>
        </Link>

        <p className="text-sm">Popular destinations for tourists</p>
        <div className="default-swiper">
          <CustomSwiper slidesNumber={3} between={20}>
            {data.allcities?.data?.map((item: any) => (
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
