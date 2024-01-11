"use client";

import { ArrowIcon } from "@/assets/iconSvg";
import DynamicHero from "@/components/DynamicHero";
import List from "@/components/GalleryCard";
import Modal from "@/components/GalleryModal";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import data from "../../../../../db.json";
import { useParams } from "next/navigation";
import optimizePath from "@/util/optimizePath";
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
  const [selected, setSelected] = useState(null);
  const [imagesdata, setImagesData] = useState<Section[]>([]);
  const [headerData, setHeaderData] = useState<HeaderData | undefined>(
    undefined
  );

  const { galereyaId } = useParams();

  useEffect(() => {
    const resData = data.galereya?.data?.find(
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

      <div className="container mx-auto px-5 py-10">
        <List setSelected={setSelected} datalist={imagesdata} />
        <Modal selected={selected} setSelected={setSelected} />
      </div>
    </div>
  );
}
