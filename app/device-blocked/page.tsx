import type { Metadata } from "next";
import Link from "next/link";
import DeviceBlockedActions from "./DeviceBlockedActions";

export const metadata: Metadata = {
  title: "Already registered on this device",
  robots: { index: false, follow: false },
};

/**
 * Shown when this device is already registered to a different email.
 * The email shown here is already masked server-side by the gate that
 * redirected here (e.g. ta***@gmail.com) — never the full address.
 * The blocked user is signed out by DeviceBlockedActions before they
 * can try again, so a blocked second email never reaches the app.
 */
export default function DeviceBlockedPage({
  searchParams,
}: {
  searchParams: { registered?: string };
}) {
  const registered = searchParams.registered || null;

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="card w-full max-w-md text-center">
        <p className="text-4xl" aria-hidden>
          📱
        </p>
        <h1 className="mt-4 text-2xl font-bold">
          You are already registered on this mobile
        </h1>
        <p className="mt-3 text-sm text-slate-300">
          This device is already registered to another account. One device
          can only be used with one account, so a new account cannot be
          created on this mobile.
        </p>
        {registered && (
          <p className="mt-4 rounded-xl border border-slate-700 bg-slate-800/60 p-4 text-sm text-slate-200">
            Please login with your previous email:{" "}
            <span className="font-semibold text-white">{registered}</span>
          </p>
        )}
        <p className="mt-4 text-xs text-slate-500">
          Changed your phone or sold this device? Ask the admin to reset
          this device&apos;s registration, then sign in again.
        </p>
        <DeviceBlockedActions />
        <Link
          href="/"
          className="mt-4 inline-block text-sm text-slate-400 hover:text-white"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
