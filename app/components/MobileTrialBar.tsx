"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

/**
 * Slim mobile trial bar (Redesign Phase 3, decision D4).
 *
 * Replaces the old homepage-only fixed bar, which was ~90px tall, wrapped
 * to two lines and could not be dismissed. This one is a single line,
 * dismissible (persisted in localStorage), mobile-only, and never renders
 * for signed-in users. A same-height spacer keeps it from covering the
 * end of the page.
 */
const DISMISS_KEY = "cryptoscopia.trialBarDismissed";

export default function MobileTrialBar() {
  const { data: session, status } = useSession();
  // Start dismissed so nothing flashes before localStorage is read.
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      setDismissed(window.localStorage.getItem(DISMISS_KEY) === "1");
    } catch {
      setDismissed(false);
    }
  }, []);

  if (status === "loading" || session?.user || dismissed) return null;

  const dismiss = () => {
    setDismissed(true);
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Private mode etc. — dismissal just won't persist.
    }
  };

  return (
    <>
      <div className="h-12 md:hidden" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-800 bg-[#0a0e17]/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
        <div className="flex items-center gap-2 px-3 py-2">
          <p className="min-w-0 flex-1 truncate text-sm text-slate-300">
            Free 3-day trial — no card needed
          </p>
          <Link
            href="/signin"
            className="btn-primary shrink-0 !px-4 !py-1.5 text-sm"
          >
            Start free
          </Link>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss trial bar"
            className="shrink-0 rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
