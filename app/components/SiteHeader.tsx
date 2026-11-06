"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import HeaderAuth from "./HeaderAuth";

/**
 * Shared site header (Redesign Phase 3) — rendered once by the root
 * layout on every page, replacing the per-page header blocks.
 *
 * Desktop auth area reuses HeaderAuth unchanged (it has a CLS-safe
 * loading state). The mobile panel carries the strategy nav plus
 * auth-aware actions, following the old homepage MobileMenu pattern.
 */
const NAV_LINKS = [
  { href: "/live", label: "Live Spreads" },
  { href: "/arbitrage-calculator", label: "Calculator" },
  { href: "/guides", label: "Guides" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const signedIn = Boolean(session?.user?.email);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#0a0e17]/90 backdrop-blur">
      <nav
        className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3"
        aria-label="Main"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-50"
        >
          <img
            src="/images/logo-mark.svg"
            alt="Cryptoscopia logo"
            width={30}
            height={30}
          />
          <span>Cryptoscopia</span>
        </Link>

        <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <HeaderAuth />
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
          </div>
        </div>

        {open && (
          <div className="absolute inset-x-0 top-full border-b border-slate-800 bg-[#0a0e17]/95 backdrop-blur-xl md:hidden">
            <div className="mx-auto max-w-6xl px-4 py-4">
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white"
                  >
                    {l.label}
                  </Link>
                ))}
                {signedIn ? (
                  <>
                    <Link
                      href="/dashboard"
                      onClick={() => setOpen(false)}
                      className="btn-primary mt-2 w-full"
                    >
                      Dashboard
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setOpen(false);
                        void signOut({ callbackUrl: "/" });
                      }}
                      className="mt-2 w-full rounded-lg px-4 py-3 text-left text-slate-300 hover:bg-slate-800 hover:text-white"
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/signin"
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white"
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/signin"
                      onClick={() => setOpen(false)}
                      className="btn-primary mt-2 w-full"
                    >
                      Start Free Trial
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
