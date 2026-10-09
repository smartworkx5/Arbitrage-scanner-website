import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://crypto-rb-trade-scanner.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/dashboard", "/payment", "/app", "/api/", "/apk/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
