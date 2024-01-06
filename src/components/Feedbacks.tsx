import React from "react";
import FeedbackCard from "./FeedbackCard";

export default function Feedbacks() {
  return (
    <section>
      <div className="flex items-center py-10 gap-10">
        <div className="space-y-5 w-max">
          <h2 className="text-[60px] font-semibold">
            What people say <span className="text-[#FA7436]">about Us.</span>
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            eligendi at maxime odit vitae totam obcaecati?
          </p>
        </div>
        <div className="w-7/12">
          <FeedbackCard />
        </div>
      </div>
    </section>
  );
}
