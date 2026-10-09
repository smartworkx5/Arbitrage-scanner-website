import type { Metadata } from "next";
import Link from "next/link";
import SignInButton from "./SignInButton";

export const metadata: Metadata = {
  title: "Sign in — start your free 3-day trial",
  description: "Sign in with Google to start your free 3-day trial of Crypto Arbitrage Scanner.",
  robots: { index: false, follow: false },
};

export default function SignInPage() {
  const configured = Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET);

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="card w-full max-w-md text-center">
        <Link href="/" className="text-lg font-bold tracking-tight">
          <span className="gradient-text">Crypto Arbitrage</span> Scanner
        </Link>
        <h1 className="mt-6 text-2xl font-bold">Welcome back</h1>
        <p className="mt-2 text-sm text-slate-400">
          Sign in with Google to start your free 3-day trial. We only store your name and email.
        </p>
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
        <Link href="/" className="mt-4 inline-block text-sm text-slate-400 hover:text-white">
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
