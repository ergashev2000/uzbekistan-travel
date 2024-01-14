"use client";

import React, { Fragment, useEffect, useState } from "react";

import DynamicHero from "@/components/DynamicHero";
import MainCard from "@/components/MainCard";

import { attractions } from "../../../../db.json";

interface Section {
  id: number;
  title: string;
  img: string;
}

export default function Page() {
  const [sections, setSections] = useState<Section[]>([]);
  const [headerData, setHeaderData] = useState({});

  useEffect(() => {
    if (attractions) {
      setSections(attractions.data);
      setHeaderData(attractions.header);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <DynamicHero header={headerData} />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-4 py-5 ">
        {sections?.map(item => (
          <Fragment key={item.id}>
            <MainCard data={item} />
          </Fragment>
        ))}
      </div>
      <div className="py-5 space-y-2">
        <h2 className="text-lg md:text-3xl font-semibold py-5">
          Узбекистан – страна с древней историей и богатой культурой.{" "}
        </h2>
        <p className="text-gray-600 indent-5 text-justify">
          Богатое архитектурное наследие, бесчисленное количество исторических
          памятников, восточные базары и современные торговые центры, уникальные
          заповедники и природные парки, санатории и зоны отдыха – в нашей
          стране каждый сможет найти, что посмотреть и где отдохнуть.
        </p>
        <p className="text-gray-600 text-justify">
          Представляем вам самые топовые культурные, архитектурно-исторические,
          развлекательные и природные достопримечательности Узбекистана.
        </p>
      </div>
    </div>
  );
}
