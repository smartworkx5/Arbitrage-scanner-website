import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/site";
import { formatDate } from "@/lib/format";
import { Breadcrumbs } from "@/app/components/Seo";
import TrialCta from "@/app/components/TrialCta";

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
  alternates: { canonical: `${SITE_URL}/blog/` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog/`,
    title: "Crypto Arbitrage Blog",
    description:
      "Strategies, explainers and honest risk guides for crypto arbitrage traders.",
  },
};

const PAGE_SIZE = 24;
/** Preferred display order; only categories that actually have posts show. */
const CATEGORY_ORDER = ["Basics", "Strategies", "Markets", "Risk"];

interface BlogQuery {
  q?: string;
  category?: string;
  page?: number;
}

function blogHref({ q, category, page }: BlogQuery): string {
  const sp = new URLSearchParams();
  if (q) sp.set("q", q);
  if (category && category !== "All") sp.set("category", category);
  if (page && page > 1) sp.set("page", String(page));
  const qs = sp.toString();
  return qs ? `/blog/?${qs}` : "/blog/";
}

/** Compact page list: first, last, and a window around the current page. */
function pageWindow(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set<number>([1, total, current - 1, current, current + 1]);
  const sorted = Array.from(pages).filter((n) => n >= 1 && n <= total).sort((a, b) => a - b);
  const out: (number | "…")[] = [];
  sorted.forEach((n, i) => {
    if (i > 0 && n - sorted[i - 1] > 1) out.push("…");
    out.push(n);
  });
  return out;
}

export default function BlogIndex({
  searchParams,
}: {
  searchParams: { page?: string; q?: string; category?: string };
}) {
  const q = (searchParams.q ?? "").trim();
  const present = new Set(blogPosts.map((p) => p.category));
  const categories = [
    "All",
    ...CATEGORY_ORDER.filter((c) => present.has(c)),
    ...Array.from(present).filter((c) => !CATEGORY_ORDER.includes(c)).sort(),
  ];
  const category =
    searchParams.category && categories.includes(searchParams.category)
      ? searchParams.category
      : "All";

  const sorted = [...blogPosts].sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished)
  );
  const needle = q.toLowerCase();
  const filtered = sorted.filter((p) => {
    if (category !== "All" && p.category !== category) return false;
    if (!needle) return true;
    return (
      p.title.toLowerCase().includes(needle) ||
      p.excerpt.toLowerCase().includes(needle) ||
      p.category.toLowerCase().includes(needle)
    );
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const requested = Number.parseInt(searchParams.page ?? "1", 10);
  const page = Math.min(
    Math.max(1, Number.isNaN(requested) ? 1 : requested),
    totalPages
  );
  const pagePosts = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const filtering = q !== "" || category !== "All";

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

        <form
          method="get"
          action="/blog/"
          className="mt-6 flex flex-col gap-3 sm:flex-row"
          role="search"
        >
          <label className="sr-only" htmlFor="blog-search">
            Search articles
          </label>
          <input
            id="blog-search"
            name="q"
            type="search"
            defaultValue={q}
            placeholder="Search articles…"
            className="input flex-1"
          />
          <label className="sr-only" htmlFor="blog-category">
            Category
          </label>
          <select
            id="blog-category"
            name="category"
            defaultValue={category}
            className="input sm:w-48"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c === "All" ? "All categories" : c}
              </option>
            ))}
          </select>
          <button type="submit" className="btn-primary">
            Search
          </button>
        </form>

        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((c) => (
            <Link
              key={c}
              href={blogHref({ q, category: c })}
              aria-current={c === category ? "page" : undefined}
              className={
                c === category
                  ? "rounded-full border border-emerald-500/60 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300"
                  : "rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300 hover:border-slate-500 hover:text-white"
              }
            >
              {c}
            </Link>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-500" aria-live="polite">
          {filtered.length} article{filtered.length === 1 ? "" : "s"}
          {category !== "All" && (
            <>
              {" "}
              in <span className="text-slate-300">{category}</span>
            </>
          )}
          {q && (
            <>
              {" "}
              matching <span className="text-slate-300">“{q}”</span>
            </>
          )}
          {totalPages > 1 && (
            <>
              {" "}
              · Page {page} of {totalPages}
            </>
          )}
          {filtering && (
            <>
              {" "}
              ·{" "}
              <Link href="/blog/" className="text-emerald-300 underline">
                Clear filters
              </Link>
            </>
          )}
        </p>

        {pagePosts.length === 0 ? (
          <div className="card mt-8 text-center">
            <h2 className="text-xl font-bold text-white">No articles found</h2>
            <p className="mt-2 text-slate-400">
              Nothing matches that search yet. Try a different keyword, or{" "}
              <Link href="/blog/" className="text-emerald-300 underline">
                browse all articles
              </Link>
              .
            </p>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {pagePosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card group hover:border-emerald-500/40 overflow-hidden"
              >
                {post.image && (
                  <div className="relative mb-4 aspect-[1200/630] overflow-hidden rounded-xl bg-slate-900">
                    <img
                      src={post.image}
                      alt={post.title}
                      width={1200}
                      height={630}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                )}
                <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                  {post.category} · {post.readingMinutes} min read
                </p>
                <h3 className="mt-2 text-xl font-bold text-white group-hover:text-emerald-300">
                  {post.title}
                </h3>
                <p className="mt-2 text-slate-400">{post.excerpt}</p>
                <p className="mt-3 text-sm text-slate-500">
                  {formatDate(post.datePublished)}
                </p>
              </Link>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <nav
            className="mt-10 flex flex-wrap items-center justify-center gap-2"
            aria-label="Blog pages"
          >
            {page > 1 && (
              <Link
                href={blogHref({ q, category, page: page - 1 })}
                className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 hover:border-slate-500 hover:text-white"
                rel="prev"
              >
                ← Previous
              </Link>
            )}
            {pageWindow(page, totalPages).map((n, i) =>
              n === "…" ? (
                <span key={`gap-${i}`} className="px-1 text-slate-500">
                  …
                </span>
              ) : (
                <Link
                  key={n}
                  href={blogHref({ q, category, page: n })}
                  aria-current={n === page ? "page" : undefined}
                  className={
                    n === page
                      ? "rounded-lg border border-emerald-500/60 bg-emerald-500/10 px-3 py-2 text-sm font-semibold text-emerald-300"
                      : "rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 hover:border-slate-500 hover:text-white"
                  }
                >
                  {n}
                </Link>
              )
            )}
            {page < totalPages && (
              <Link
                href={blogHref({ q, category, page: page + 1 })}
                className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 hover:border-slate-500 hover:text-white"
                rel="next"
              >
                Next →
              </Link>
            )}
          </nav>
        )}
      </div>
      <TrialCta />
    </div>
  );
}
