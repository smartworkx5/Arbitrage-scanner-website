import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <p className="font-mono text-sm font-semibold uppercase tracking-widest text-emerald-400">
        404
      </p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
        This page does not exist
      </h1>
      <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-400">
        The spread you were looking for has closed — or the link was wrong.
        Try one of these instead:
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link href="/live" className="btn-primary">
          See live spreads
        </Link>
        <Link href="/arbitrage-calculator" className="btn-secondary">
          Profit calculator
        </Link>
        <Link href="/blog" className="btn-secondary">
          Read the blog
        </Link>
      </div>
      <p className="mt-8 text-sm text-slate-500">
        Or go back to the{" "}
        <Link href="/" className="text-emerald-300 underline">
          homepage
        </Link>
        .
      </p>
    </div>
  );
}
