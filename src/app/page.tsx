import Cities from "@/components/Cities";
import Feedbacks from "@/components/Feedbacks";
import GalleryCards from "@/components/GalleryCards";
import Hero from "@/components/Hero";
import Hotels from "@/components/Hotels";
import TopCites from "@/components/TopCites";

export default function page() {
  return (
    <>
      <main>
        <Hero />
        <TopCites />
        <Hotels />
        <Feedbacks />
        <GalleryCards />
        <Cities/>
      </main>
    </>
  );
}
