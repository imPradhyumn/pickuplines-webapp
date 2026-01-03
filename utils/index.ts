import cheesyLines from "../app/data/cheesy.json";
import cuteLines from "../app/data/cute.json";
import adultLines from "../app/data/18+.json";
import cleverLines from "../app/data/clever.json";

const allLines = {
  cheesy: cheesyLines,
  cute: cuteLines,
  clever: cleverLines,
  dirty: adultLines,
};

export const getLinesBasedOnCategory = (category: string) => {
  return allLines[category as keyof typeof allLines];
};
