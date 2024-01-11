
import Attractions from "@/components/Attractions";
import Blog from "@/components/Blog";
import Cities from "@/components/Cities";
import Feedbacks from "@/components/Feedbacks";
import GalleryCards from "@/components/GalleryCards";
import Hero from "@/components/Hero";
import Hotels from "@/components/Hotels";
import TopCites from "@/components/TopCites";
import TourismForAll from "@/components/TourismForAll";


export default function Page() {

  return (
    <>
      <main>
        <Hero />
        <div className="container mx-auto px-1">
          <TopCites />
          <Cities />
          <Attractions />
          <Feedbacks />
          <GalleryCards />
          <TourismForAll />
          <Hotels />
          <Blog />
        </div>
      </main>
    </>
  );
}
