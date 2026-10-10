"use client";

import { useState } from "react";
import Link from "next/link";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How it works" },
    { href: "/guides", label: "Guides" },
    { href: "/blog", label: "Blog" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg border border-slate-700 bg-slate-900 p-2 text-slate-300 hover:text-white"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full border-b border-slate-800 bg-[#0a0e17]/95 backdrop-blur-xl">
          <nav className="mx-auto max-w-6xl px-4 py-4" aria-label="Mobile">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                l.href.startsWith("/") ? (
                  <Link
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white"
                  >
                    {l.label}
                  </a>
                )
              ))}
              <Link
                href="/signin"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 w-full"
              >
                Start Free Trial
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
