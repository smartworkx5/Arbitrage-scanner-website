import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { guides } from "@/lib/guides";
import { blogPosts } from "@/lib/blog-posts";
import { pairs } from "@/lib/pairs";

// next.config.mjs sets trailingSlash: true, so every canonical URL ends
// with "/". Sitemap entries MUST use the canonical (trailing-slash) form —
// listing the no-slash form makes every entry a 308 redirect, which Google
// reports as "Page with redirect" and deprioritises for discovery.
const u = (path: string) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}/`);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: u("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: u("/guides"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...guides.map((g) => ({
      url: u(`/guides/${g.slug}`),
      lastModified: new Date(g.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: u("/arbitrage"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: u("/live"),
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: u("/arbitrage-calculator"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: u("/affiliates"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...pairs.map((p) => ({
      url: u(`/arbitrage/${p.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: u("/best-crypto-arbitrage-scanners"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: u("/glossary"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: u("/blog"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogPosts.map((b) => ({
      url: u(`/blog/${b.slug}`),
      lastModified: new Date(b.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: u("/privacy"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: u("/signin"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
