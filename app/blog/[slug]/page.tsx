import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/site";
import { ArticleBody } from "@/app/components/ArticleBody";
import { Breadcrumbs, articleJsonLd, faqJsonLd } from "@/app/components/Seo";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  const ogImage = post.image ? `${SITE_URL}${post.image}` : undefined;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: ["Crypto Arbitrage Scanner"],
      ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630 }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const faqBlocks = post.blocks.filter((b) => b.type === "faq");
  const faqs = faqBlocks.flatMap((b) => (b.type === "faq" ? b.items : []));
  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .concat(blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0a0e17]">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              articleJsonLd({
                title: post.title,
                description: post.description,
                url,
                datePublished: post.datePublished,
                dateModified: post.dateModified,
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
          items={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
        />
        <p className="text-sm font-medium uppercase tracking-wider text-emerald-400">
          {post.category}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Published {post.datePublished}
          {post.dateModified !== post.datePublished &&
            ` · Updated ${post.dateModified}`}{" "}
          · {post.readingMinutes} min read
        </p>
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="mt-6 w-full rounded-2xl border border-slate-800"
          />
        )}
        <div className="mt-8">
          <ArticleBody blocks={post.blocks} />
        </div>
        <div className="mt-10 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 text-center">
          <h2 className="text-xl font-bold text-white">
            See arbitrage opportunities live
          </h2>
          <p className="mt-2 text-slate-300">
            Crypto Arbitrage Scanner monitors 16 exchanges in real time — try
            it free for 3 days.
          </p>
          <Link href="/signin" className="btn-primary mt-4 inline-block">
            Start Free Trial
          </Link>
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-bold text-white">Keep reading</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
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
