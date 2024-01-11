"use client";

import DynamicHero from "@/components/DynamicHero";
import React, { Fragment, useEffect, useState } from "react";

import resData from "../../../../db.json";
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
      setSections(resData.alltourism.data);
      setHeaderData(resData.alltourism.header);
    }
  }, []);

  return (
    <div className="min-h-screen container mx-auto py-24 ">
      <DynamicHero header={headerData} />

      <div className="grid grid-cols-3 gap-5 py-10">
        {sections?.map(item => (
          <Fragment key={item.id}>
            <MainCard data={item} />
          </Fragment>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold my-5">
          Виды
          <span className="text-[#FA7436]"> туризма</span>
        </h2>
        <p className="text-sm text-gray-600 indent-4 text-justify">
          В мире существует бесконечное множество способов весело и интересно
          провести время: отправиться в путешествие или приключения, исследовать
          что-либо, прикоснуться к священным местам, увидеть уникальные места
          нетронутые цивилизацией, поправить свое здоровье, активно отдыхать,
          испытать экстрим или просто провести время на природе с семьей или
          друзьями, и все это так или иначе связано с туризмом и туриндустрией в
          целом. В Узбекистане действуют все три основных вида туризма:
          въездной, выездной и внутренний.
          <br />
          <br />
          Въездной и внутренний туризм включают в себя как базовые, так и
          специфические туристические продукты: экскурсии по туристическим
          достопримечательностям; размещение в гостиницах, зонах отдыха,
          курортах, санаториях, туристических деревнях, юртовых лагерях, в
          кемпингах; дегустация национальных блюд и вин; участие в фестивалях и
          праздничных мероприятиях; комфортное перемещение по стране.
          <br />
          <br />
          Все виды путешествий и отдыха в Узбекистане можно разделить по типам
          на спортивный, этнический, молодежный, экологический,
          гастрономический, медицинский, культурный, событийный, паломнический,
          литературный, зимний, велосипедный и другие разновидности туризма
          принимая во внимание для некоторых из них сезонность, которая должна
          быть учитываемы при выборе данного направления.
          <br />
          <br />
          Туристы приезжая в Узбекистан путешествуют либо в одиночку, с друзьями
          или семьей, либо в составе тур группы с гидом, который проведет
          путешественников по заранее намеченному маршруту по интересным и
          увлекательным местам, в соответствии с их целями и запланированным на
          путешествие бюджетом.
        </p>
      </div>
    </div>
  );
}
