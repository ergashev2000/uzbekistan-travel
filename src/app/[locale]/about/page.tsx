import Image from 'next/image';
import Link from 'next/link';

import BannerImg from '@/assets/images/about-banner.webp' 

export default function page() {
    return (
      <div className="min-h-screen">
        <div className="w-full xl:h-[500px] lg:h-[400px] h-[200px] xl:pt-20 pt-2 mb-3 relative">
          <Image
            src={BannerImg}
            alt="About Wetravel.uz"
            width={1000}
            height={1000}
            className="w-full h-full rounded-2xl object-cover object-center"
          />
          <p className="absolute left-1/2 -translate-x-1/2 bottom-2 xl:bottom-20 font-semibold text-white text-lg xl:text-4xl">
            About Us
          </p>
        </div>
        <div className="py-10">
          <h2 className="text-center text-2xl font-semibold">Wetravel.uz</h2>
          <p className="font-semibold text-gray-700">
            История создания нашей организации начинается с начала 2018 года,
            когда Правительство Узбекистана решило показать всему миру всю
            красоту нашей страны, самобытность ее древних городов и уникальность
            неизведанных ранее маршрутов!
          </p>
          <p className="mt-5">
            Contact with the developer:{" "}
            <Link
              href={"https://t.me/islomjon5747"}
              target="_blank"
              className="text-blue-600"
            >
              https://t.me/islomjon5747
            </Link>
          </p>
        </div>
      </div>
    );
}
