import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://markazalimurtaza.com";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/hadith`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/donate`, changeFrequency: "monthly", priority: 0.8 }
  ];
}
