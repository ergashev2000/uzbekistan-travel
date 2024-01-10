import Attractions from "@/components/Attractions";
import Blog from "@/components/Blog";
import Cities from "@/components/Cities";
import Feedbacks from "@/components/Feedbacks";
import GalleryCards from "@/components/GalleryCards";
import Hero from "@/components/Hero";
import Hotels from "@/components/Hotels";
import TopCites from "@/components/TopCites";
import TourismForAll from "@/components/TourismForAll";
import Routes from "@/components/Routes";

export default function page() {
  return (
    <>
      <main>
        <Hero />
        <div className="container mx-auto">
          <TopCites />
          <Routes />
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
