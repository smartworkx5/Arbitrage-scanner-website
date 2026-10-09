"use client";

import { useState, type MouseEvent } from "react";
import { useSession, signIn } from "next-auth/react";

/**
 * Launch App button with a sign-in gate.
 * - Signed-in user  -> goes straight to /app
 * - New visitor     -> sees a "please sign in first" prompt instead of
 *                     silently bouncing, with a one-click Google sign-in.
 */
export function LaunchAppButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const [showPrompt, setShowPrompt] = useState(false);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    if (session) {
      window.location.href = "/app";
    } else {
      setShowPrompt(true);
    }
  };

  return (
    <>
      <a href="/app" onClick={handleClick} className={className}>
        {children}
      </a>

      {showPrompt && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="signin-prompt-title"
        >
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setShowPrompt(false)}
          />
          <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl">
            <h3
              id="signin-prompt-title"
              className="text-lg font-semibold text-white"
            >
              Sign in required
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Please sign in with Google first to launch the app. Your free
              3-day trial starts on your first sign-in.
            </p>
            <button
              onClick={() => signIn("google", { callbackUrl: "/app" })}
              className="btn-primary mt-5 w-full"
            >
              Sign in with Google
            </button>
            <button
              onClick={() => setShowPrompt(false)}
              className="mt-2 w-full rounded-xl px-4 py-2 text-sm text-slate-400 transition hover:text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
