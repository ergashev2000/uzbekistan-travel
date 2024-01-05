import HeroContents from "./HeroContents";
import HeroSwiper from "./HeroSwiper";

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen py-20 flex items-center justify-between]">
      <HeroContents />
      <HeroSwiper />
    </div>
  );
};

export default Hero;
