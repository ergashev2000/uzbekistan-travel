"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import DynamicHero from "@/components/DynamicHero";
import List from "@/components/GalleryCard";
import Modal from "@/components/GalleryModal";

import optimizePath from "@/util/optimizePath";

import { galereya } from "../../../../../db.json";

interface Section {
  id: number;
  title: string;
  img: string;
  city_category: string;
}

interface HeaderData {
  id: number;
  title: string;
  description: string;
  banner_img: string;
}

export default function Page() {
  const { galereyaId } = useParams();

  const [selected, setSelected] = useState(null);
  const [imagesdata, setImagesData] = useState<Section[]>([]);
  const [headerData, setHeaderData] = useState<HeaderData | undefined>(
    undefined
  );


  useEffect(() => {
    const resData = galereya?.data?.find(
      (item: any) => optimizePath(item.header?.title) === galereyaId
    );

    if (resData) {
      const { data, header } = resData;

      setImagesData(data);
      setHeaderData(header);
    }
  }, [galereyaId]);

  return (
    <div className="min-h-screen">
      <DynamicHero header={headerData} />

      <div className="container mx-auto xl:px-5 px-1 py-5 xl:py-10">
        <List setSelected={setSelected} datalist={imagesdata} />
        <Modal selected={selected} setSelected={setSelected} />
      </div>
    </div>
  );
}
