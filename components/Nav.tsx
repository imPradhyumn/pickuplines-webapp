"use client";

import { CATEGORIES } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavigationBtns = () => {
  const categories = Object.values(CATEGORIES);
  const pathName = usePathname();

  return (
    <nav className="flex gap-2 my-5 rounded md:mx-auto md:w-fit overflow-x-auto whitespace-nowrap">
      {categories.map((item) => {
        const classNameBasedOnPath = pathName.includes(item)
          ? `bg-pink-600 text-white`
          : `bg-pink-200 text-black`;
        return (
          <button
            key={item}
            className={`capitalize rounded text-sm px-2 py-1 ${classNameBasedOnPath}`}
          >
            <Link href={`${item}-pickup-lines`}>{item}</Link>
          </button>
        );
      })}
    </nav>
  );
};

export default NavigationBtns;
