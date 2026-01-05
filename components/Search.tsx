"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

const Search = () => {
  const { push } = useRouter();
  const pathName = usePathname();

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    if (val.length <= 2) {
      push(`${pathName}`);
      return;
    }

    push(`${pathName}?keyword=${val}`);
  };

  return (
    <div className="px-3 rounded-xl bg-pink-300 w-full md:w-1/4 my-4 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-search-heart"
        viewBox="0 0 16 16"
      >
        <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018" />
        <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11" />
      </svg>
      <input
        type="text"
        className="bg-transparent w-full px-3 py-1
        text-sm focus:outline-0 placeholder:text-slate-900"
        alt="search-box"
        placeholder="Keyword search (atleast 3 letters)"
        onChange={handleSearchInput}
      />
    </div>
  );
};

export default Search;
