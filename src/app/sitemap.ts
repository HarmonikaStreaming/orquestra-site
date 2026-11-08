import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const atualizado = new Date("2026-11-08");
  return [
    { url: `${SITE_URL}/`, lastModified: atualizado, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/academy`, lastModified: atualizado, changeFrequency: "monthly", priority: 0.7 },
  ];
}
