import Link from "next/link";
import { LaunchAppButton } from "../LaunchAppButton";
import RiskDisclosure from "./RiskDisclosure";

/**
 * Shared site footer (Redesign Phase 3) — rendered once by the root
 * layout on every page. Link set matches the routes that exist today;
 * nothing here is aspirational.
 */
const COLUMNS: {
  title: string;
  links: { href: string; label: string }[];
}[] = [
  {
    title: "Product",
    links: [
      { href: "/live", label: "Live Spreads" },
      { href: "/arbitrage-calculator", label: "Profit Calculator" },
      { href: "/pricing", label: "Pricing" },
      { href: "/affiliates", label: "Affiliates" },
    ],
  },
  {
    title: "Learn",
    links: [
      { href: "/guides", label: "Guides" },
      { href: "/blog", label: "Blog" },
      { href: "/arbitrage", label: "Exchange Comparisons" },
      { href: "/best-crypto-arbitrage-scanners", label: "Best Scanners" },
      { href: "/glossary", label: "Glossary" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/privacy", label: "Privacy" },
      { href: "/signin", label: "Sign in" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-800/80 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="flex items-center gap-2 text-base font-bold tracking-tight text-slate-100">
              <img
                src="/images/logo-mark.svg"
                alt="Cryptoscopia logo"
                width={26}
                height={26}
              />
              Cryptoscopia
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
              Trade smarter, not harder. Real-time arbitrage scanning with
              fee-aware net estimates — and honest limits.
            </p>
            <LaunchAppButton className="mt-4 inline-block text-sm font-medium text-emerald-400 underline hover:text-emerald-300">
              Launch App ↗
            </LaunchAppButton>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={`Footer — ${col.title}`}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <RiskDisclosure className="mt-10 max-w-4xl" />
        <p className="mt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Cryptoscopia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
