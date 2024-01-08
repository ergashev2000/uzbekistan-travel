import React from "react";

export default function DynamicHero() {
  return (
    <div className="h-[65vh] relative bg-[url(https://firebasestorage.googleapis.com/v0/b/uzbekistan-travel-ea70f.appspot.com/o/thumb_754_1920_0_0_0_auto.jpg?alt=media&token=51c87881-7baf-459c-8db9-d80c37f7e0e9)] bg-no-repeat bg-center object-cover w-full">
      <div className="absolute w-full h-full bg-black bg-opacity-5" />
      <div className="container mx-auto h-full w-full flex items-center">
        <div className="text-white space-y-5 z-10">
          <p>Home /</p>
          <h2 className="text-[60px] font-semibold">Tashkent</h2>
          <p>Lorem ipsum dolor sit.</p>
        </div>
      </div>
    </div>
  );
}
