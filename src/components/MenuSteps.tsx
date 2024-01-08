import { useEffect, useRef, useState } from "react";

export default function MenuSteps({
  sectionRefs,
  sectionNum,
}: {
  sectionRefs: any;
  sectionNum: number;
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
    <>
      <ul className="space-y-2 text-sm">
        {Array.from({ length: 9 }).map((_, id) => (
          <li
            key={id}
            onClick={() => scrollToSection(id)}
            className={`cursor-pointer ${
              id === scrollId ? "bg-red-400" : " bg-white"
            }`}
          >
            {id} Lorem ipsum dolor sit.
          </li>
        ))}
      </ul>
    </>
  );
}
