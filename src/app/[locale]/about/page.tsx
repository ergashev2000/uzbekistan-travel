import Image from 'next/image';
import Link from 'next/link';

import BannerImg from '@/assets/images/about-banner.webp' 

export default function page() {
    return (
      <div className="min-h-screen">
        <div className="w-full xl:h-[500px] lg:h-[400px] h-[200px] xl:pt-20 pt-2 mb-3 relative">
          <Image
            src={BannerImg}
            alt="About"
            width={1000}
            height={1000}
            className="w-full h-full rounded-2xl object-cover object-center"
          />
          <p className="text-5xl absolute left-1/2 -translate-x-1/2 bottom-20 font-semibold text-white">
            About Us
          </p>
        </div>
        <div>
          <h2 className="text-center text-2xl font-semibold">Wetravel.uz</h2>
          <p className="font-semibold text-gray-700">
            This project is not intended for commercial purposes. Copyrighted
            materials will be removed from the site at the request of the
            author.
            <br />
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
