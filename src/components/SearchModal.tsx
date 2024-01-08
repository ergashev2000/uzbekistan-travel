"use client";

import { SearchIcon } from "@/assets/iconSvg";
import React, { useEffect, useState } from "react";

export default function SearchModal() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    useEffect(() => {
      const handleClick = (e: any) => {
        if (e.target instanceof HTMLElement && e.target.className) {
          const xid = e.target.id
          if (xid.includes("search-modal")) {
            setIsOpenModal(false);
          }
        }
      };
      document.addEventListener("click", (e: any) => {
        handleClick(e);
      });
      return () => {
        document.removeEventListener("click", (e: any) => {
          handleClick(e);
        });
      };
    }, [isOpenModal]);

  return (
    <>
      <button
        className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
        onClick={() => setIsOpenModal(prev => !prev)}
      >
        <SearchIcon />
      </button>
      {isOpenModal && (
        <div
          className="fixed left-0 top-0 w-full h-screen bg-black bg-opacity-80 z-50 bg-center bg-cover"
          id="search-modal"
        >
          <div className="max-w-xl w-full absolute left-1/2 -translate-x-1/2 top-32 bg-gray-200 rounded-lg p-7  ">
            <div className="flex items-center rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                className="h-10 px-4 py-2 w-full outline-none"
              />
              <button className="w-20 h-10 flex items-center justify-center bg-white">
                <SearchIcon />
              </button>
            </div>

            <ul className="pt-5 space-y-2">
              <li className="bg-white py-2 px-4 rounded">
                Lorem ipsum dolor sit amet.
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
