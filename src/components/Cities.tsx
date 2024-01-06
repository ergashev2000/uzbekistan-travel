import { ArrowIcon } from "@/assets/iconSvg";
import Image from "next/image";
import Link from "next/link";
import CitiesCard from "./CitiesCard";

export default function Cities() {
  return (
    <section>
        <Link href={"/"} passHref>
          <h2 className="text-[60px] xl:text-2xl 2xl:text-3xl font-semibold w-fit my-10 flex items-center gap-2 [&>div]:hover:ml-2 [&>div]:hover:opacity-100 transition-all duration-300">
            O&apos;zbekiston<span className="text-[#FA7436]">shaharlari</span>
            <div className=" transition-all duration-300 opacity-0">
              <ArrowIcon />
            </div>
          </h2>
        </Link>

        <div className="grid grid-cols-4 gap-5 mb-10">
          <CitiesCard />
          <CitiesCard />
          <CitiesCard />
          <CitiesCard />
          <CitiesCard />
        </div>
    </section>
  );
}
