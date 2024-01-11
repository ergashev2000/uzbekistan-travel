import { DateIcon } from "@/assets/iconSvg";
import Image from "next/image";
import { allblogs } from "../../db.json";

export default function BlogList() {
  return (
    <>
      {allblogs?.map((item: any) => (
        <div
          key={item.id}
          className="max-w-lg w-full hover:shadow-lg p-2 rounded-2xl cursor-pointer hover:bg-white transition-all duration-500"
        >
          <div className="w-full h-52 rounded-xl overflow-hidden">
            <Image
              src={item.img}
              alt={item.title}
              width={500}
              height={500}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div>
            <div className=" flex items-center justify-between gap-2 text-sm text-gray-600 py-3">
              <span className=" flex items-center gap-2">
                <DateIcon /> {item.date}
              </span>
              <span className=" flex items-center gap-2">
                <DateIcon /> {item.read_time} минут на чтение
              </span>
            </div>
            <h2 className="text-lg xl:text-xl 2xl:text-2xl font-semibold line-clamp-2">
              {item.title}
            </h2>
          </div>
        </div>
      ))}
    </>
  );
}
