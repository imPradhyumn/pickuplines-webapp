import { CATEGORIES } from "@/constants";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pickuplineshub.vercel.app";
  const categories = Object.values(CATEGORIES);

  const urls = categories.map((item) => ({
    url: `${baseUrl}/${item}-pickup-lines/`,
    lastModified: new Date("2026-01-05"),
  }));

  return [{ url: baseUrl, lastModified: new Date("2026-01-05") }, ...urls];
}
