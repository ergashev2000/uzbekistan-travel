import { useEffect, useRef, useState } from "react";

export default function MenuSteps({
  sectionRefs,
  sectionNum,
  titles,
}: {
  sectionRefs: any;
  sectionNum: number;
  titles?: any;
}) {
  const [scrollId, setScrollId] = useState<number>(0);
  console.log("render");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      sectionRefs.forEach((sectionRef: any) => {
        const section = sectionRef.current;

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            setScrollId(parseInt(section.id));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: number) => {
    const sectionElement = document.getElementById(JSON.stringify(sectionId));

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <aside className="w-1/4 bg-white sticky top-10 h-fit p-5 border border-gray-300 rounded-lg mt-5">
      <ul className="space-y-2 text-sm pl-4">
        {titles?.map((item: any, i: any) => (
          <li
            key={i}
            onClick={() => scrollToSection(i)}
            className={`cursor-pointer transition-all duration-300 before:w-2 before:h-2 before:rounded-full before:bg-red-400 before:absolute relative before:-left-4 before:top-1/2 before:-translate-y-1/2 before:opacity-0 before:transition-all before:duration-300 ${
              i === scrollId ? "text-[#FA7436] underline underline-offset-8 before:opacity-100" : " bg-white"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
