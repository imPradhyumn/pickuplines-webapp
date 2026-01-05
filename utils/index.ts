import cheesyLines from "../app/data/cheesy.json";
import cuteLines from "../app/data/cute.json";
import adultLines from "../app/data/18+.json";
import cornyLines from "../app/data/corny.json";
import mathLines from "../app/data/maths.json";
import scienceLines from "../app/data/science.json";

export const getLinesBasedOnCategory = (category: string) => {
  const allLines = {
    cheesy: cheesyLines,
    cute: cuteLines,
    dirty: adultLines,
    corny: cornyLines,
    maths: mathLines,
    science: scienceLines,
  };
  return allLines[category as keyof typeof allLines];
};

export const getLinesBasedOnKeyword = (keyword: string) => {
  const allLines = [
    ...cheesyLines,
    ...cuteLines,
    ...adultLines,
    ...cornyLines,
    ...mathLines,
    ...scienceLines,
  ];
  return allLines.filter((line) => line.includes(keyword));
};
