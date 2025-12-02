// app/sitemap.ts
import type { MetadataRoute } from "next";
import { allBlogs } from "contentlayer/generated";

const SITE_URL = "https://www.blackfarmerjournal.com/"; // same as layout

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/blog",
    "/projects",
    "/about",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const blogRoutes: MetadataRoute.Sitemap = allBlogs.map((post) => ({
    url: `${SITE_URL}${post.url}`,
    lastModified: post.publishedAt
      ? new Date(post.publishedAt)
      : new Date(),
  }));

  return [...staticRoutes, ...blogRoutes];
}
