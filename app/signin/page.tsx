import type { Metadata } from "next";
import Link from "next/link";
import SignInButton from "./SignInButton";

export const metadata: Metadata = {
  title: "Sign in — start your free 3-day trial",
  description: "Sign in with Google to start your free 3-day trial of Cryptoscopia.",
  robots: { index: false, follow: false },
};

export default function SignInPage() {
  const configured = Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET);

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="card w-full max-w-md text-center">
        <Link href="/" className="flex items-center justify-center gap-2 text-lg font-bold tracking-tight">
          <img src="/images/logo-mark.svg" alt="Cryptoscopia logo" width={30} height={30} />
          <span className="gradient-text">Cryptoscopia</span>
        </Link>
        <h1 className="mt-6 text-2xl font-bold">Start your free 3-day trial</h1>
        <p className="mt-2 text-sm text-slate-400">
          Sign in with Google — it takes 10 seconds. We only store your name and email.
        </p>
        <ul className="mx-auto mt-5 max-w-xs space-y-2 text-left text-sm text-slate-300">
          <li className="flex gap-2"><span className="text-green-400">✓</span>Full access to all 16 exchanges + paper trading bot</li>
          <li className="flex gap-2"><span className="text-green-400">✓</span>No credit card required</li>
          <li className="flex gap-2"><span className="text-green-400">✓</span>After 3 days, access simply stops unless you choose Pro</li>
        </ul>
        <div className="mt-8">
          <SignInButton configured={configured} />
        </div>
        {!configured && (
          <div className="mt-6 rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 text-left text-sm text-amber-200">
            <p className="font-semibold">⚠️ Google sign-in is not configured yet</p>
            <p className="mt-1 text-amber-200/80">
              Set <code className="text-amber-100">GOOGLE_CLIENT_ID</code> and{" "}
              <code className="text-amber-100">GOOGLE_CLIENT_SECRET</code> in your environment
              variables (see <code className="text-amber-100">DEPLOY.md</code>) to enable sign-in.
            </p>
          </div>
        )}
        <p className="mt-6 text-xs text-slate-500">
          By signing in you agree to our terms. Your data is never sold.
        </p>
        <p className="mt-2 text-xs text-slate-500">
          One device can be registered to one account only. If this device
          is already registered to another email, you will be asked to
          sign in with that previous email.
        </p>
        <Link href="/" className="mt-4 inline-block text-sm text-slate-400 hover:text-white">
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
