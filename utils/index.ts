import cheesyLines from "../app/data/cheesy.json";
import cuteLines from "../app/data/cute.json";
import adultLines from "../app/data/18+.json";
import cornyLines from "../app/data/corny.json";
import mathLines from "../app/data/maths.json";
import scienceLines from "../app/data/science.json";

const allLines = {
  cheesy: cheesyLines,
  cute: cuteLines,
  dirty: adultLines,
  corny: cornyLines,
  maths: mathLines,
  science: scienceLines,
};

export const getLinesBasedOnCategory = (category: string) => {
  return allLines[category as keyof typeof allLines];
};
