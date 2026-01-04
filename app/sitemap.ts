import { CATEGORIES } from "@/constants";

export default function sitemap() {
  const baseUrl = "https://top-pickuplines.vercel.app";
  const categories = Object.values(CATEGORIES);

  const urls = categories.map((item) => ({
    url: `${baseUrl}/${item}`,
    lastModified: new Date(),
  }));

  return [{ url: baseUrl, lastModifed: new Date() }, ...urls];
}
