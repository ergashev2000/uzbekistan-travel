import AsiaBestPlacesCard from "@/components/AsiaBestPlacesCard";
import AsiaBlogMainCard from "@/components/AsiaBlogMainCard";
import CustomSwiper from "@/components/SwiperCustom";
import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen">
      <header className="py-20 flex gap-5 h-screen items-center">
        <div className="w-2/5 relative z-10 space-y-5">
          <p className="arizonia-fonts text-5xl">Travel Guide</p>
          <h1 title="Asia" className="">
            <span className="header-text-effect">Asia</span>
          </h1>
          <p className="pt-5 text-lg">
            Majestic Asia! An incredible continent that has something to offer
            for any kind of traveler.
          </p>
        </div>
        <div className="w-3/5 absolute top-0 right-0 h-[calc(100vh-50px)]">
          <Image
            src={
              "https://images.unsplash.com/photo-1583022725197-4dc56058caaf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="img"
            title="asia"
            width={1000}
            loading="lazy"
            height={1000}
            className="banner-radius w-full h-full object-cover overflow-hidden"
          />
        </div>
      </header>

      <section>
        <div className="pt-5">
          <h2 className="font-semibold text-3xl">
            Best places to visit in Asia
          </h2>
          <CustomSwiper between={20} slidesNumber={3} navigation>
            <AsiaBestPlacesCard />
            <AsiaBestPlacesCard />
            <AsiaBestPlacesCard />
          </CustomSwiper>
        </div>
      </section>
      <section>
        <div className="pt-5">
          <h2 className="font-semibold text-3xl">Urban Asia</h2>
          <CustomSwiper between={20} slidesNumber={3}>
            <AsiaBlogMainCard />
            <AsiaBlogMainCard />
            <AsiaBlogMainCard />
          </CustomSwiper>
        </div>
      </section>
      <section>
        <div className="pt-5">
          <h2 className="font-semibold text-3xl">Unforgettable experiences</h2>
          <CustomSwiper between={20} slidesNumber={3}>
            <AsiaBlogMainCard />
            <AsiaBlogMainCard />
            <AsiaBlogMainCard />
          </CustomSwiper>
        </div>
      </section>
    </div>
  );
}
