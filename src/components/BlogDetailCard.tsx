import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Clock, MoveRight } from "lucide-react";
import { BlogType } from "@/types";
import { changeDateFormat } from "@/util/changeDateFormat";
import optimizePath from "@/util/optimizePath";

interface BlogDetailCardProps {
  blogData: BlogType;
}

export default function BlogDetailCard({ blogData }: BlogDetailCardProps) {
  return (
    <div className="rounded-3xl bg-white p-2 flex gap-5 shadow transition duration-300 hover:shadow-md">
      <div className="2xl:h-[300px] xl:h-[270px] h-[200px] rounded-2xl overflow-hidden w-2/5 relative">
        <Image
          src={blogData.poster}
          width={1000}
          height={1000}
          className="object-cover w-full h-full hover:scale-105 transition duration-500"
          alt={blogData.imageTags}
        />
        <span className="absolute left-1 top-1 bg-black rounded-xl px-2 py-0.5 bg-opacity-50 text-white text-sm first-letter:uppercase">
          {blogData?.category || "Travel"}
        </span>
      </div>
      <div className="pt-5 pb-2 pr-3 flex flex-col justify-between w-3/5">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">{blogData.title}</h2>
          <p className="line-clamp-2 xl:line-clamp-3 2xl:line-clamp-4">
            {blogData.description}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <Link href={`/blogs/${optimizePath(blogData.title)}_${blogData.id}`}>
            <div className="flex gap-2 items-center h-12 relative bg-gray-50 hover:bg-gray-100 font-semibold text-sm px-4 rounded-full group transition-all duration-500 w-44 text-blue-500 active:bg-gray-500">
              <MoveRight className="group-hover:translate-x-28 absolute transition-all duration-500" />
              <span className="relative translate-x-10 group-hover:translate-x-2 transition-all duration-500">
                READ MORE
              </span>
            </div>
          </Link>
          <time
            className="text-sm flex font-semibold items-center gap-2 text-gray-600"
            dateTime="2020-06-19"
          >
            <Clock size={"22px"} /> {changeDateFormat(blogData.date)}
          </time>
        </div>
      </div>
    </div>
  );
};

