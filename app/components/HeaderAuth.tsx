"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

// Homepage header auth area: after sign-in the user sees Dashboard (and
// Sign out) instead of "Sign in / Free Trial". Uses the client session
// so the cached homepage never serves one visitor's state to another.
export default function HeaderAuth() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <span className="hidden text-sm text-slate-500 sm:block">…</span>;
  }

  if (session?.user?.email) {
    return (
      <>
        <Link href="/dashboard" className="hidden text-sm font-medium text-slate-300 hover:text-white sm:block">
          Dashboard
        </Link>
        <button
          type="button"
          onClick={() => signOut({ callbackUrl: "/" })}
          className="hidden text-sm font-medium text-slate-400 hover:text-white sm:block"
        >
          Sign out
        </button>
        <Link href="/dashboard" className="btn-primary hidden !px-4 !py-2 text-sm sm:inline-flex">
          Dashboard
        </Link>
      </>
    );
  }

  return (
    <>
      <Link href="/signin" className="hidden text-sm font-medium text-slate-300 hover:text-white sm:block">
        Sign in
      </Link>
      <Link href="/signin" className="btn-primary hidden !px-4 !py-2 text-sm sm:inline-flex">
        Free Trial
      </Link>
    </>
  );
}
