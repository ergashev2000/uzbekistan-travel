"use client";

import { useState } from "react";
import data from "../../db.json";

import HeroContents from "./HeroContents";
import HeroSwiper from "./HeroSwiper";
import { BgElement } from "@/assets/iconSvg";

const Hero: React.FC = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  return (
    <>
      <div className="relative h-screen py-20 flex items-center justify-between]">
        <HeroContents data={data} selectedIndex={selectedCardIndex} />
        <HeroSwiper
          data={data}
          setSelectedCardIndex={setSelectedCardIndex}
          selectedCardIndex={selectedCardIndex}
        />
      </div>
    </>
  );
};

export default Hero;
