import { DateIcon } from "@/assets/iconSvg";

import Link from "next/link";
import { useTranslations } from "next-intl";

import BlogList from "@/components/BlogList";

export default function Page() {
  const t = useTranslations("Index");
  return (
    <div className="min-h-screen pt-24 container mx-auto py-10">
      <div className="text-sm font-semibold items-center flex gap-2 pb-5">
        <Link href={"/"}>Главная</Link> /<span>Блог</span> 
      </div>
      <div className="h-[calc(100vh-200px)] bg-[url(https://firebasestorage.googleapis.com/v0/b/uzbekistan-travel-ea70f.appspot.com/o/86ashblxr375ju1dlpqlgzkwbaa9ppvj.webp?alt=media&token=0efdadc2-b153-4d75-862a-963d2eb90e43)] bg-cover bg-top  rounded-2xl w-full bg-white shadow relative">
        <div className="text-white absolute bottom-16 left-10 space-y-10 w-1/2">
          <h2 className="text-4xl font-semibold">
            Хива — прогулка по древнему городу в Узбекистане
          </h2>
          <span className="flex items-center gap-2 text-sm">
            <DateIcon /> 19.02.2023
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 py-10">
        <BlogList/>
        </div>
    </div>
  );
}
