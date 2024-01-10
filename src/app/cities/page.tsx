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
      setSections(resData.allcities.data);
      setHeaderData(resData.alltourism.header);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <DynamicHero header={headerData} />

      <div className="container mx-auto py-10">
        <div className="grid grid-cols-3 gap-5 py-10">
          {sections?.map(item => (
            <Fragment key={item.id}>
              <MainCard data={item} />
            </Fragment>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold my-5">
            Исторические Города
            <span className="text-[#FA7436]"> Узбекистана</span>
          </h2>
          <p className="text-sm text-gray-600 indent-4 text-justify">
            В этой рубрике мы ближе познакомим вас с таFкими древними городами
            Узбекистана, как Ташкент, Самарканд, Бухара, Хива, Шахрисабз.
            Блистательные города нашей страны, являвшиеся некогда частью
            Великого Шёлкового пути, насчитывают не одно тысячелетие. И даже в
            голове не укладывается, как такие исторические гиганты становясь
            живыми легендами, продолжают свой путь в современном мире. Здесь вы
            узнаете об их головокружительной истории, об архитектурных
            памятниках редкой красоты, вкуснейшей национальной кухне, о
            загадочных местах каждого города. Кроме того, вы сможете совершить
            виртуальные путешествия, приобрести сувениры и подарки онлайн,
            насладиться всем самым интересным в фотогалерее.
          </p>
        </div>
      </div>
    </div>
  );
}
