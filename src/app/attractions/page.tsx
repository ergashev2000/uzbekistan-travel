"use client";

import DynamicHero from "@/components/DynamicHero";
import React, { Fragment, useEffect, useState } from "react";

import resData from "../../../db.json";
import MainCard from "@/components/MainCard";

interface Section {
  id: number;
  title: string;
  img: string;
}

export default function Page() {
  const [sections, setSections] = useState<Section[]>([]);
  const [headerData, setHeaderData] = useState({});

  useEffect(() => {
    if (resData) {
      setSections(resData.attractions.data);
      setHeaderData(resData.attractions.header);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <DynamicHero header={headerData} />

      <div className="container mx-auto py-10">
        <div className="max-w-5xl mx-auto space-y-2 px-5 xl:px-20">
          <h2 className="text-3xl font-semibold py-2">
            Узбекистан – страна с древней историей и богатой культурой.{" "}
          </h2>
          <p className="text-gray-600 indent-5 text-justify">
            Богатое архитектурное наследие, бесчисленное количество исторических
            памятников, восточные базары и современные торговые центры,
            уникальные заповедники и природные парки, санатории и зоны отдыха –
            в нашей стране каждый сможет найти, что посмотреть и где отдохнуть.
          </p>
          <p className="text-gray-600 indent-5 text-justify">
            Представляем вам самые топовые культурные,
            архитектурно-исторические, развлекательные и природные
            достопримечательности Узбекистана.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 py-10">
          {sections?.map(item => (
            <Fragment key={item.id}>
              <MainCard data={item} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
