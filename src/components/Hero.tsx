"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";

import HeroContents from "./HeroContents";
import HeroSwiper from "./HeroSwiper";
import Loading from "./Loading";

import data from "../../db.json";

type BannerT = {
  id: number;
  title: string;
  description: string;
  banner_img: string;
  banner_video: string;
  slug: string;
};

const Hero: React.FC = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [allData, setAllData] = useState<BannerT[]>();
  const locale = useLocale();

  useEffect(() => {
    if (data) {
      if (locale === "ru") {
        setAllData(data?.banner_data_ru);
      } else {
        setAllData(data?.banner_data_en);
      }
    }
  }, [locale]);

  if (!allData) {
    return <Loading/>
  }
  
  return (
    <>
      <div className="h-[calc(100vh-100px)] lg:py-20 flex items-center justify-between">
        <HeroContents data={allData} selectedIndex={selectedCardIndex} />
        <HeroSwiper
          data={allData}
          setSelectedCardIndex={setSelectedCardIndex}
          selectedCardIndex={selectedCardIndex}
        />
      </div>
    </>
  );
};

export default Hero;
