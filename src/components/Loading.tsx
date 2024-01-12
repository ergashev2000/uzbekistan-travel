import React from "react";

export default function Loading() {
  return (
    <div className="bg-black w-full h-full fixed flex justify-center items-center z-30 left-0 top-0">
      <div className="text-white">
        <span className="loader">Loading</span>
        {/* <iframe
          src="https://lottie.host/embed/c278a2e9-4abb-44a4-a911-e7b10f570ea7/qG6iKn7rRI.json"
          className="w-full h-full"
        ></iframe> */}
      </div>
    </div>
  );
}
