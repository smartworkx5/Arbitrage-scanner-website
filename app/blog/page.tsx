import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/site";
import { Breadcrumbs } from "@/app/components/Seo";

export const metadata: Metadata = {
  title: "Crypto Arbitrage Blog — News, Guides & Market Insights",
  description:
    "Practical crypto arbitrage insights: strategies, market explainers, risk guides and realistic profit expectations. New articles regularly.",
  keywords: [
    "crypto arbitrage blog",
    "crypto arbitrage news",
    "arbitrage trading insights",
    "crypto market analysis",
  ],
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    title: "Crypto Arbitrage Blog",
    description:
      "Strategies, explainers and honest risk guides for crypto arbitrage traders.",
  },
};

const categories = ["All", "Basics", "Strategies", "Markets", "Risk"];

export default function BlogIndex() {
  const sorted = [...blogPosts].sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished)
  );
  return (
    <div className="min-h-screen bg-[#0a0e17]">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <Breadcrumbs items={[{ label: "Blog" }]} />
        <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          Crypto Arbitrage Blog
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-400">
          Honest, practical insights on crypto arbitrage — no hype, no
          guaranteed-profit nonsense. Just how the market works and how to
          navigate it.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300"
            >
              {c}
            </span>
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card group hover:border-emerald-500/40 overflow-hidden"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-40 object-cover -mx-0 -mt-0 mb-2"
                />
              )}
              <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                {post.category} · {post.readingMinutes} min read
              </p>
              <h2 className="mt-2 text-xl font-bold text-white group-hover:text-emerald-300">
                {post.title}
              </h2>
              <p className="mt-2 text-slate-400">{post.excerpt}</p>
              <p className="mt-3 text-sm text-slate-500">
                {post.datePublished}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
