import Image from "next/image";
import CustomSwiper from "./SwiperCustom";
import { InstagramIcon, YoutubeIcon } from "@/assets/iconSvg";
import Link from "next/link";

export default function FeedbackCard() {
  return (
    <div className="default-swiper">
      <CustomSwiper
        effect={"coverflow"}
        slidesNumber={2}
        between={20}
        loop
        navigation
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="p-2 2xl:p-3 mb-12 rounded-xl border-4 bg-white shadow-xl relative flex flex-col gap-2 items-center max-w-md mx-auto"
          >
            <video
              controls
              poster="https://firebasestorage.googleapis.com/v0/b/uzbekistan-travel-ea70f.appspot.com/o/photo_2024-01-05_00-15-21.jpg?alt=media&token=34c0e44a-49db-4358-b764-a06e5e2bb59e"
              className="w-full h-96 object-cover max-w-xl rounded-lg overflow-hidden"
            >
              <source src="https://firebasestorage.googleapis.com/v0/b/uzbekistan-travel-ea70f.appspot.com/o/10000000_205029389318756_1342992308157030614_n_mp4_efg%3De30_nc_h.mp4?alt=media&token=a9f1813c-d26b-4d77-a1fe-d9d9a720a76c" />
            </video>

            <div className="flex flex-col justify-between gap-2">
              <em>
                “It was so amazing. I love Uzbekistan so much. Please come to
                Bukhara”
              </em>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/uzbekistan-travel-ea70f.appspot.com/o/photo_2024-01-05_00-15-21.jpg?alt=media&token=34c0e44a-49db-4358-b764-a06e5e2bb59e"
                    }
                    alt="saa"
                    width={200}
                    height={200}
                    className="w-12 h-12 rounded-full object-cover object-center"
                  />
                  <div>
                    <h5 className="font-semibold">Mike taylor</h5>
                    <p className="text-sm ">Lahore, Pakistan</p>
                  </div>
                </div>
                <ul className="flex gap-2 items-center">
                  <li>
                    <Link href={"/"}>
                      <div className="w-10 h-10 rounded-full bg-white shadow-md flex justify-center items-center">
                        <InstagramIcon />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
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
