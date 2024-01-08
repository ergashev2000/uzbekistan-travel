"use client";

import { CheckedIcon } from "@/assets/iconSvg";
import DynamicHero from "@/components/DynamicHero";
import MainCard from "@/components/MainCard";
import MenuSteps from "@/components/MenuSteps";
import CustomSwiper from "@/components/SwiperCustom";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];



  return (
    <div className="min-h-screen">
      <DynamicHero />

      <div className="container mx-auto">
        <div className="flex gap-5 p-10">
          <article className="w-3/4 space-y-10">
            <section id="0" ref={sectionRefs[0]}>
              <h2 className="text-2xl font-semibold">
                Tashkent - The modern metropolis
              </h2>
              <p className="py-4">
                Tashkent is the capital of Uzbekistan and also the largest city
                in Central Asia.
              </p>
              <Image
                src={
                  "https://firebasestorage.googleapis.com/v0/b/uzbekistan-travel-ea70f.appspot.com/o/5e53c06ca0049049451193.jpg?alt=media&token=475fa553-67f1-4abe-b84e-34db609227f3"
                }
                alt="lorem"
                width={1000}
                height={1000}
                className="w-full h-[500px] object-cover rounded-lg"
              />
              <p className="py-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestiae ratione adipisci enim, vitae dignissimos accusantium
                ad sunt amet in atque harum exercitationem fuga numquam
                molestias? Dicta corrupti modi ad beatae.
              </p>
            </section>

            <section id="1" ref={sectionRefs[1]}>
              <h3 className="text-2xl font-semibold">Attractions</h3>
              <p className="py-4">
                Tashkent has a large list of attractions. It will take several
                days to visit all of them.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <CheckedIcon />
                  Wide avenues, green alleys, fountains and eco-parks for
                  leisurely walks;
                </li>
                <li className="flex gap-2">
                  <CheckedIcon />
                  Unique artifacts about the history and culture of the peoples
                  of Central Asia in the numerous museums of the city;
                </li>
              </ul>
            </section>

            <section id="2" ref={sectionRefs[2]}>
              <h3 className="text-2xl font-semibold">Attractions</h3>

              <iframe
                width="1091"
                height="480"
                src="https://www.youtube.com/embed/P8fcfqagsC0"
                title="Invest in Tashkent"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-[500px] rounded-lg"
              />
            </section>

            <section id="3" ref={sectionRefs[3]} className="default-swiper">
              <CustomSwiper slidesNumber={2.9} between={20} loop navigation>
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
                <MainCard />
              </CustomSwiper>
            </section>

            <section id="4" ref={sectionRefs[4]}>
              <h3 className="text-2xl font-semibold">Photo gallery</h3>
              <p className="text-sm text-gray-600">
                Places, people, events - all the most intriguing in our Photo
                Gallery
              </p>
              <div className="flex items-center gap-5 py-5">
                <div className="w-1/3 h-[250px]">
                  <Image
                    src={"https://fakeimg.pl/250x100/"}
                    alt="salom"
                    width={1000}
                    height={1000}
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
                <div className="w-1/3 h-[250px]">
                  <Image
                    src={"https://fakeimg.pl/250x100/"}
                    alt="salom"
                    width={1000}
                    height={1000}
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
                <div className="w-1/3 h-[250px]">
                  <Image
                    src={"https://fakeimg.pl/250x100/"}
                    alt="salom"
                    width={1000}
                    height={1000}
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
              </div>

              <div>
                <iframe
                  src="https://momento360.com/e/u/b84ed8e07d1e43dcaeec74d89ca3232b?utm_campaign=embed&utm_source=other&heading=-4.927999999999997&pitch=-0.6159999999999997&field-of-view=75"
                  frameBorder="0"
                  className="w-full h-[500px]"
                />
              </div>
            </section>

            <section id="5" ref={sectionRefs[5]}>
              <h3 className="text-2xl font-semibold">Climate</h3>
              <p>
                Most time of the summer in Tashkent is hot, so do not forget
                about sunscreen and hats! Winter is mostly mild and snowless,
                but do not neglect warm things, it is so cool in the evening
                that you want to wear a scarf!
              </p>
            </section>

            <section id="6" ref={sectionRefs[6]}>
              <h3 className="text-2xl font-semibold">Cuisine</h3>
              <p>
                Tashkent restaurants with their variety and the level of service
                can surprise any gourmet. In the city, you can find not only
                national cuisine, which in Tashkent differs in taste from the
                identical dishes in the other parts of the country, but also the
                best representatives of the foreign gastronomic industry. In
                Tashkent, you can try Uyghur, Korean, Chinese, Japanese,
                European and even molecular cuisine. However, the most delicious
                cuisine is naturally Uzbek! Did you know that in December 2016
                pilaf was included in the UNESCO Intangible Heritage List? Now
                you know it! Come to see and taste the most delicious food in
                the world! You can read more about the national cuisine of
                Uzbekistan at this link.
              </p>

              <div className="flex items-center gap-5 py-5">
                <div className="w-1/3 h-[250px]">
                  <Image
                    src={"https://fakeimg.pl/250x100/"}
                    alt="salom"
                    width={1000}
                    height={1000}
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
                <div className="w-1/3 h-[250px]">
                  <Image
                    src={"https://fakeimg.pl/250x100/"}
                    alt="salom"
                    width={1000}
                    height={1000}
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
                <div className="w-1/3 h-[250px]">
                  <Image
                    src={"https://fakeimg.pl/250x100/"}
                    alt="salom"
                    width={1000}
                    height={1000}
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
              </div>
            </section>

            <section id="7" ref={sectionRefs[7]}>
              <h3 className="text-2xl font-semibold">Photo zones</h3>
              <p>
                An integral part of every trip is photography! In this section,
                we introduce you the most beautiful places in this city, where
                you can make the best shots. P.S. Do not forget that during the
                visit the religious sights of Uzbekistan, women are advisable to
                cover the exposed parts of the body (shoulders, back and legs).
                Such attractions will be marked with
              </p>
              <div className="max-w-full py-5">
                <Image
                  src={"https://fakeimg.pl/550x400/"}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-[500px] rounded-lg"
                  title="seo uchun"
                />
                <p className=" py-2 text-sm">
                  <em>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    assumenda culpa odio
                  </em>
                </p>
              </div>
            </section>

            <section id="8" ref={sectionRefs[8]}>
              <h3 className="text-2xl font-semibold">History 🏺</h3>

              <p>
                Tashkent is the capital of Uzbekistan and, concurrently, the
                largest city in Central Asia. In 2008, the archaeologists
                announced that the city is already 2,200 years old. One of the
                first mentions of the city was found in the chronicles written
                in the II century BC. In the ancient Chinese sources, Tashkent
                was called “Shi”, which means stone, and in the early Middle
                Ages, Shash or Chach.
              </p>

              <div className="max-w-full py-5">
                <Image
                  src={"https://fakeimg.pl/550x400/"}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-[500px] rounded-lg"
                  title="seo uchun"
                />
                <p className=" py-2 text-sm">
                  <em>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    assumenda culpa odio
                  </em>
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, nam debitis neque repudiandae aliquam explicabo
                  deleniti non molestias. Quidem incidunt optio omnis voluptatem
                  a quos ex et repudiandae facere blanditiis? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Rem id animi maxime.
                  Dolores, saepe pariatur rerum nesciunt quis maxime temporibus
                  voluptatem cumque, delectus, enim perferendis. Doloremque
                  perspiciatis autem possimus officiis?
                </p>
              </div>
            </section>
            <section id="9" ref={sectionRefs[9]}>
              <h3 className="text-2xl font-semibold">Map</h3>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d177537.16644717447!2d69.15702485558086!3d41.292066908065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent!5e0!3m2!1sen!2s!4v1704616326664!5m2!1sen!2s"
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[500px] rounded-lg my-5"
              />
            </section>
          </article>

          <aside className="w-1/4 bg-white sticky top-10 h-fit p-5 border border-gray-100 rounded-lg mt-5">
            <MenuSteps sectionNum={9} sectionRefs={sectionRefs} />
          </aside>
        </div>

        <div>
          <h3 className="text-2xl  font-semibold">
            Other cities in Uzbekistan
          </h3>
          <p className="text-sm">Popular destinations for tourists</p>
          <div className="flex items-center gap-5 pb-10 pt-5">
            <MainCard />
            <MainCard />
            <MainCard />
          </div>
        </div>
      </div>
    </div>
  );
}
