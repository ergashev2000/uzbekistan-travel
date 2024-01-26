import Attractions from "@/components/Attractions";
import Blog from "@/components/Blog";
import Cities from "@/components/Cities";
import CountryWeather from "@/components/CountryWeather";
import Feedbacks from "@/components/Feedbacks";
import GalleryCards from "@/components/GalleryCards";
import Hero from "@/components/Hero";
import Hotels from "@/components/Hotels";
import TopCites from "@/components/TopCites";
import TourismForAll from "@/components/TourismForAll";

export default function Page() {
  return (
    <>
      <Hero />
      <TopCites />
      <Cities />
      <Attractions />
      <CountryWeather/>
      {/* <Feedbacks /> */}
      <GalleryCards />
      <TourismForAll />
      <Hotels />
      <Blog />
    </>
  );
}
