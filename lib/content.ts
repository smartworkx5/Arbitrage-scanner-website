/**
 * Portable content blocks used by guides, blog posts and landing pages.
 * Keeps long-form SEO content data-driven so new articles are just data.
 */
export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; title: string; text: string; tone?: "info" | "warning" }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "proscons"; pros: string[]; cons: string[] }
  | { type: "faq"; items: { q: string; a: string }[] };

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  datePublished: string; // ISO date
  dateModified: string; // ISO date
  readingMinutes: number;
  category: string;
}
