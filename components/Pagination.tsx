import Link from "next/link";
import React from "react";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  category: string;
};

const Pagination = ({ totalPages, currentPage, category }: PaginationProps) => {
  const pageNumArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="my-5 mx-auto w-fit flex gap-2">
      {pageNumArray.map((item) => {
        return item === currentPage ? (
          <button className="rounded px-3 py-1 bg-pink-600">{item}</button>
        ) : (
          <Link
            href={`${category}?page=${item}`}
            className="rounded px-3 py-1 bg-pink-200"
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
};

export default Pagination;
