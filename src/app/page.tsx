import Attractions from "@/components/Attractions";
import Cities from "@/components/Cities";
import Feedbacks from "@/components/Feedbacks";
import GalleryCards from "@/components/GalleryCards";
import Hero from "@/components/Hero";
import Hotels from "@/components/Hotels";
import TopCites from "@/components/TopCites";
import TourismForAll from "@/components/TourismForAll";

export default function page() {
  return (
    <>
      <main>
        <Hero />
        <div className="container mx-auto">
          <TopCites />
          <Hotels />
          <Feedbacks />
          <GalleryCards />
          <Cities />
          <Attractions />
          <TourismForAll />
        </div>
      </main>
    </>
  );
}
