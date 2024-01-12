import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { CloseIcon } from "@/assets/iconSvg";

export default function Modal({
  selected,
  setSelected,
}: {
  selected: any;
  setSelected: any;
}) {
  if (!selected) {
    return <></>;
  }

  return (
    <div
      onClick={() => setSelected(null)}
      className="fixed inset-0 bg-black/50 z-50 cursor-pointer"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="max-w-full h-screen flex flex-col justify-center mx-auto px-2 rounded-xl xl:w-fit xl:mx-auto  cursor-default"
      >
        <motion.div layoutId={`card-${selected.id}`}>
          <div className="relative overflow-hidden rounded-lg h-fit max-xl:pb-8">
            <Image
              alt={selected?.img_tags}
              src={selected?.img}
              width={1000}
              height={1000}
              className="w-full object-contain xl:h-[calc(100vh-60px)] "
            />
            <button
              className="absolute top-2 right-2 h-7 w-7 rounded-full flex justify-center items-center bg-white bg-opacity-50"
              onClick={() => setSelected(null)}
            >
              <CloseIcon />
            </button>
            <div className="absolute bottom-0 lg:bottom-0 left-0 bg-white bg-opacity-50 w-full px-2 py-1">
              <h3 className="font-semibold">{selected.title}</h3>
              {selected.description && (
                <p className="text-sm">{selected.description}</p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
