"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

/**
 * Below-fold lazy mount for the homepage's LiveSpreads table.
 *
 * LiveSpreads is client-only content (it fetches /api/spreads in the
 * browser and polls every 60s) sitting in the "Live Proof" section, well
 * below the fold on both mobile and desktop. Loading its chunk, running
 * its fetch and rendering its table during initial page load only adds
 * main-thread work before first paint / LCP — work the visitor cannot
 * see yet. This wrapper renders the same "Loading live spreads…"
 * placeholder server-side, then mounts the real table (via a split
 * dynamic chunk) the moment the section comes within 200px of the
 * viewport. Browsers without IntersectionObserver mount immediately.
 *
 * The /live page keeps its own direct import of LiveSpreads and is
 * unaffected by this wrapper.
 */
const LiveSpreads = dynamic(() => import("../live/LiveSpreads"), {
  ssr: false,
});

export default function LazyLiveSpreads() {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setMounted(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setMounted(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {mounted ? (
        <LiveSpreads />
      ) : (
        <div className="card text-center">
          <p className="animate-pulse text-sm text-slate-400">
            Loading live spreads from the exchanges…
          </p>
        </div>
      )}
    </div>
  );
}
