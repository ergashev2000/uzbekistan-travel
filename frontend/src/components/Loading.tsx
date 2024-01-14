import React from "react";

export default function Loading() {
  return (
    <div className="bg-black w-full h-full fixed flex justify-center items-center z-30 left-0 top-0">
      <div className="text-white">
        <span className="loader">Loading</span>
      </div>
    </div>
  );
}
