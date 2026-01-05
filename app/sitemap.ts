import { CATEGORIES } from "@/constants";
import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pickuplineshub.vercel.app";
  const categories = Object.values(CATEGORIES);

  const urls = categories.map((item) => ({
    url: `${baseUrl}/${item}-pickup-lines/`,
    lastModified: "2026-01-05",
  }));

  return [{ url: baseUrl, lastModified: "2026-01-05" }, ...urls];
}
