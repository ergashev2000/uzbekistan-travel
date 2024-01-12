import Image from "next/image";
import Link from "next/link";

import CustomSwiper from "./SwiperCustom";
import { feedbackBreakpoints } from "@/util/breackPoints";

import { InstagramIcon, YoutubeIcon } from "@/assets/iconSvg";
import { feedback } from "../../db.json";

export default function FeedbackCard() {
  return (
    <div className="default-swiper">
      <CustomSwiper
        slidesNumber={2}
        between={20}
        loop
        navigation
        brackpoint={feedbackBreakpoints}
      >
        {feedback?.map((item, index) => (
          <div
            key={index}
            className="p-2 2xl:p-3 mb-12 max-xl:mb-2 rounded-xl border-4 bg-white shadow-xl relative flex flex-col gap-2 items-center max-w-md mx-auto"
          >
            <video
              controls
              className="w-full h-96 max-xl:h-72 object-cover max-w-xl rounded-lg overflow-hidden"
            >
              <source src={item.video} />
            </video>

            <div className="flex flex-col justify-between gap-2">
              <em>{item.title}</em>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    src={item.avatar}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="w-12 h-12 rounded-full object-cover object-center"
                  />
                  <div>
                    <h5 className="font-semibold">{item.name}</h5>
                  </div>
                </div>
                <ul className="flex gap-2 items-center">
                  <li>
                    <Link href={item.instagram}>
                      <div className="w-10 h-10 rounded-full bg-white shadow-md flex justify-center items-center">
                        <InstagramIcon />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href={item.youtube}>
                      <div className="w-10 h-10 rounded-full bg-white shadow-md flex justify-center items-center">
                        <YoutubeIcon />
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </CustomSwiper>
    </div>
  );
}
