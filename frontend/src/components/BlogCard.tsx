import Image from "next/image";
import Link from "next/link";
import { ClockIcon, DateIcon } from "@/assets/iconSvg";

export default function BlogCard({ data }: { data: any }) {
  return (
    <div className="max-w-md w-full rounded-xl overflow-hidden hover:bg-white transition-all duration-300 cursor-pointer hover:shadow-lg">
      <Image
        src={data.img}
        alt={data.title}
        width={500}
        height={500}
        className="w-full h-44 object-cover object-center"
      />
      <div className="p-2">
        <Link href={data.slug}>
          <h3 className="line-clamp-2 font-semibold h-12">{data.title}</h3>
        </Link>
        <div className="flex items-center justify-between gap-2">
          <p className="text-gray-400 text-[15px] pt-2 flex items-center gap-2">
            <DateIcon /> {data.date}
          </p>
          <p className="text-gray-400 text-[15px] pt-2 flex items-center gap-2">
            <ClockIcon /> {data.date}
          </p>
        </div>
      </div>
    </div>
  );
}
