"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <p className="font-mono text-sm font-semibold uppercase tracking-widest text-red-400">
        Error
      </p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
        Something went wrong
      </h1>
      <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-400">
        This page hit an unexpected problem. Trying again usually fixes it —
        if it keeps happening, please come back in a few minutes.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button type="button" onClick={() => reset()} className="btn-primary">
          Try again
        </button>
        <Link href="/" className="btn-secondary">
          Go to homepage
        </Link>
      </div>
    </div>
  );
}
