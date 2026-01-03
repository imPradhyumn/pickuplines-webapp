import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import { getLinesBasedOnCategory } from "@/utils";
import React from "react";

const LINES_PER_PAGE = 20;

type Params = {
  params: { category: string };
  searchParams: { page?: string };
};

const CategoryPage = ({ params, searchParams }: Params) => {
  const pageNum = parseInt(searchParams?.page ?? "1");
  const path = params.category.toLowerCase();
  const category = path.split("-")[0];
  const pickupLines = getLinesBasedOnCategory(category);

  const linesToRender = pickupLines.slice(pageNum - 1, LINES_PER_PAGE);

  const desc =
    category === "dirty" ? "make him/her wet ;)" : "make him/her blush ;)";

  return (
    <div className="md:my-5">
      <h1 className="text-sm md:text-2xl font-semibold font-[roboto]">
        Top <span className="capitalize ">{category}</span>
        &nbsp;pickup lines to flirt and {desc}
      </h1>
      {linesToRender?.map((line, index) => {
        const sNo = pageNum === 1 ? index : (pageNum - 1) * 10 + index;
        return <Card line={line} key={index} index={sNo} />;
      })}

      <Pagination
        totalPages={Math.floor(pickupLines.length / LINES_PER_PAGE) + 1}
        currentPage={pageNum}
        category={category}
      />
    </div>
  );
};

export default CategoryPage;
