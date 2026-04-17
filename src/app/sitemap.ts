import type { MetadataRoute } from "next";
import { siteConfig, services, zones } from "@/config/site";
import { articles } from "@/content/blog";

const citySlug = siteConfig.city.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const urls: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // Primary service pages (city)
  for (const s of services) {
    urls.push({
      url: `${siteConfig.url}/${s.slug}-${citySlug}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  // Zone service pages
  for (const zone of zones) {
    for (const s of services) {
      urls.push({
        url: `${siteConfig.url}/${s.slug}-${zone.slug}/`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  // Blog articles
  for (const a of articles) {
    urls.push({
      url: `${siteConfig.url}/blog/${a.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // Static pages
  const staticPaths = ["contact", "zones", "blog", "plan-du-site", "mentions-legales", "confidentialite"];
  for (const p of staticPaths) {
    urls.push({
      url: `${siteConfig.url}/${p}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }

  return urls;
}
