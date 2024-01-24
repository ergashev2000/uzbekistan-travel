import { DateIcon } from "@/assets/iconSvg";

import Link from "next/link";
import { useTranslations } from "next-intl";

import BlogList from "@/components/BlogList";
import BlogDetailCard from "@/components/BlogDetailCard";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import BlogItemList from "@/components/BlogItemList";
import { BlogPlaceholder } from "@/components/Placeholders";

export default function Page() {
  const t = useTranslations("Index");

  
  return (
    <div className="min-h-screen pt-20 container mx-auto py-10">
      <div className="text-sm font-semibold items-center flex gap-2 pb-5">
        <Link href={"/"}>Главная</Link> /<span>Блог</span>
      </div>
      <div className="2xl:h-[calc(100vh-350px)] xl:h-[calc(100vh-300px)] h-[calc(100vh-400px)] bg-[url(https://firebasestorage.googleapis.com/v0/b/uzbekistan-travel-ea70f.appspot.com/o/86ashblxr375ju1dlpqlgzkwbaa9ppvj.webp?alt=media&token=0efdadc2-b153-4d75-862a-963d2eb90e43)] bg-cover bg-top  rounded-2xl w-full bg-white shadow relative">
        <div className="text-white absolute top-1/2 -translate-y-1/2 left-10  xl:space-y-2 2xl:space-y-5 w-1/2">
          <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold">
            Хива — прогулка по древнему городу в Узбекистане
          </h2>
          <div className="w-1/2 h-1 bg-gray-300 rounded"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aut
            omnis dicta animi inventore unde, natus reiciendis, tenetur nesciunt
            repudiandae dolor
          </p>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-3/4">
          <BlogItemList />
        </div>
        <div className="w-1/4 max-h-full mt-10">
          <div className="rounded-xl shadow bg-white p-3 py-5">
            <h3 className="text-xl font-semibold pb-3">Top Rated</h3>
            <div className="">
              <div className="flex items-center gap-2 h-20 border-t">
                <Image
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/uzbekistan-travel-ea70f.appspot.com/o/86ashblxr375ju1dlpqlgzkwbaa9ppvj.webp?alt=media&token=0efdadc2-b153-4d75-862a-963d2eb90e43"
                  }
                  alt="salom"
                  width={200}
                  height={200}
                  className="w-1/3 h-14 rounded-md"
                />
                <div className="w-2/3 flex flex-col justify-between">
                  <h2 className="text-sm font-semibold line-clamp-2 leading-4">
                    Happy Coats VS Serious Edgy Coats
                  </h2>
                  <Link href={"/"}>
                    <span className="text-[12px] flex gap-2 items-center text-green-500 mt-1">
                      <MoveRight />
                      <span>READ MORE</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
