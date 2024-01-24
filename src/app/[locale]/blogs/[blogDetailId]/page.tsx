"use client";

import BlogList from "@/components/BlogList";
import CustomSwiper from "@/components/SwiperCustom";
import { getDataById } from "@/services/firebase";
import { BlogType } from "@/types";
import { blogBreakpoints } from "@/util/breackPoints";
import { changeDateFormat } from "@/util/changeDateFormat";
import { useQuery } from "@tanstack/react-query";
import { CalendarDays, Clock } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Page() {
  const locale = useLocale();
  const { blogDetailId } = useParams();
  const router = useRouter();

  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ["blog-detail"],
    queryFn: async () => {
      try {
        const result = await getDataById(
          `blog_${locale}`,
          (blogDetailId as string)?.split("_")[1]
        );

        if (!result) {
          return null;
        }
        return result as BlogType;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
  });

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/blogs");
    }
  }, [locale, data, isLoading]);

  console.log(isLoading);
  console.log(data);
  console.log(locale);

  return (
    <div className="min-h-screen pt-20 pb-10 flex gap-5">
      <div className="w-4/5">
        <header>
          <h1 className="text-3xl font-semibold py-4">{data?.title}</h1>
          <div className="text-sm flex font-semibold items-end text-gray-600 gap-10">
            <span className="flex gap-1">
              <Clock size={"22px"} /> {data?.readTime} min to read
            </span>
            <time className="flex gap-1" dateTime="2020-06-19">
              <CalendarDays size={"22px"} /> {changeDateFormat(data?.date)}
            </time>
            <span className="py-1 px-3 rounded-md bg-gray-200">
              {data?.category || "Travel"}
            </span>
          </div>
          {data?.poster && (
            <Image
              src={data?.poster}
              alt={data?.imageTags}
              className="w-full h-[500px] object-cover rounded-3xl mt-8"
              title={data?.imageTags}
              width={1000}
              height={1000}
            />
          )}
          <div className="flex justify-center">
            <em className="py-3">{data?.imageTags}</em>
          </div>
        </header>
        <article>
          <div dangerouslySetInnerHTML={{ __html: data?.edithtml || "" }} />
        </article>
        <div className="w-full my-10 default-swiper">
          <h3 className="text-3xl font-semibold">See related posts</h3>
          <CustomSwiper
            slidesNumber={2.5}
            between={20}
            navigation
            brackpoint={blogBreakpoints}
          >
            <BlogList />
            <BlogList />
          </CustomSwiper>
        </div>
      </div>
      <aside className="w-1/5 h-screen bg-red-500"></aside>
    </div>
  );
}
