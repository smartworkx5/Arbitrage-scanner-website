import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guides } from "@/lib/guides";
import { SITE_URL } from "@/lib/site";
import { ArticleBody } from "@/app/components/ArticleBody";
import { Breadcrumbs, articleJsonLd, faqJsonLd } from "@/app/components/Seo";

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const guide = guides.find((g) => g.slug === params.slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    keywords: guide.keywords,
    alternates: { canonical: `${SITE_URL}/guides/${guide.slug}` },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/guides/${guide.slug}`,
      title: guide.title,
      description: guide.description,
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
    },
  };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = guides.find((g) => g.slug === params.slug);
  if (!guide) notFound();

  const url = `${SITE_URL}/guides/${guide.slug}`;
  const faqBlocks = guide.blocks.filter((b) => b.type === "faq");
  const faqs = faqBlocks.flatMap((b) => (b.type === "faq" ? b.items : []));
  const related = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0a0e17]">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              articleJsonLd({
                title: guide.title,
                description: guide.description,
                url,
                datePublished: guide.datePublished,
                dateModified: guide.dateModified,
              })
            ),
          }}
        />
        {faqs.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqJsonLd(faqs)),
            }}
          />
        )}

        <Breadcrumbs
          items={[
            { label: "Guides", href: "/guides" },
            { label: guide.title },
          ]}
        />

        <p className="text-sm font-medium uppercase tracking-wider text-emerald-400">
          {guide.category} Guide
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          {guide.title}
        </h1>
        <p className="mt-4 text-lg text-slate-400">{guide.excerpt}</p>
        <p className="mt-3 text-sm text-slate-500">
          Updated {guide.dateModified} · {guide.readingMinutes} min read
        </p>

        <div className="mt-8">
          <ArticleBody blocks={guide.blocks} />
        </div>

        <div className="mt-10 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6">
          <h2 className="text-xl font-bold text-white">
            Put this strategy into practice
          </h2>
          <p className="mt-2 text-slate-300">
            Crypto Arbitrage Scanner detects {guide.title.toLowerCase().includes("triangular") ? "triangular loops" : guide.title.toLowerCase().includes("funding") ? "funding-rate opportunities" : guide.title.toLowerCase().includes("cex") ? "CEX vs DEX gaps" : "cross-exchange spreads"} in real time across 16 exchanges — and the paper trading bot lets you practice risk-free.
          </p>
          <Link href="/signin" className="btn-primary mt-4 inline-block">
            Start Free 3-Day Trial
          </Link>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-bold text-white">Related guides</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/guides/${r.slug}`}
                className="card hover:border-emerald-500/40"
              >
                <p className="text-xs uppercase tracking-wider text-emerald-400">
                  {r.category}
                </p>
                <p className="mt-1 font-semibold text-white">{r.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
