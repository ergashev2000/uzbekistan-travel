"use client";

import { getAllDocuments } from "@/services/firebase";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import BlogDetailCard from "./BlogDetailCard";
import { BlogType } from "@/types";
import React from "react";
import { BlogPlaceholder } from "./Placeholders";

export default function ProductsRender() {
  const locale = useLocale();
  
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => getAllDocuments(`blog_${locale}`),
  });

if (isLoading) {
  return (
    <div className="space-y-3 mt-5">
      {Array.from({ length: 3 }).map((_, index) => (
        <React.Fragment key={index}>
          <BlogPlaceholder />
        </React.Fragment>
      ))}
    </div>
  );
}



  return (
    <div className="grid grid-cols-1 gap-5 py-10 w-full">
      {data?.map((item, index) => (
        <React.Fragment key={index}>
          <BlogDetailCard blogData={item as BlogType} />
        </React.Fragment>
      ))}
    </div>
  );
}
