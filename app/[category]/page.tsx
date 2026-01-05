import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import { getLinesBasedOnCategory, getLinesBasedOnKeyword } from "@/utils";
import React, { Fragment } from "react";

const LINES_PER_PAGE = 20;

type ParamsProps = {
  params: { category: string };
  searchParams: { page?: string; keyword?: string };
};

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function generateMetadata({ params }: ParamsProps) {
  const path = params.category.toLowerCase();
  const category = path.split("-")[0];
  return { title: `${capitalize(category)} Pickup Lines` };
}

const CategoryPage = ({ params, searchParams }: ParamsProps) => {
  const pageNum = parseInt(searchParams?.page ?? "1");
  const path = params.category.toLowerCase();
  const keyword = searchParams?.keyword ?? "";
  const category = path.split("-")[0];

  const pickupLines = getLinesBasedOnCategory(category);

  const linesToRender =
    keyword.length >= 3
      ? getLinesBasedOnKeyword(keyword)
      : pickupLines?.slice(pageNum - 1, LINES_PER_PAGE);

  let desc =
    category === "dirty" ? "make him/her wet ;)" : "make him/her blush ;)";

  return (
    <div className="md:my-5">
      <Search />
      <h1 className="text-sm md:text-2xl font-semibold font-[roboto]">
        {keyword.length < 0 && (
          <Fragment>
            Top <span className="capitalize">{category}</span>
            &nbsp;pickup lines to flirt and {desc}
          </Fragment>
        )}
      </h1>

      {linesToRender.length === 0 && (
        <h1>Oops!! No lines in this category yet</h1>
      )}

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
