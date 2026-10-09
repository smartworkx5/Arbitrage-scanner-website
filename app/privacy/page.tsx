import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Crypto Arbitrage Scanner — how we collect, use and protect your data.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/" className="text-sm text-slate-400 hover:text-white">
        ← Back to home
      </Link>
      <h1 className="mt-4 text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: October 4, 2026</p>

      <div className="prose-slate mt-8 space-y-6 text-sm leading-relaxed text-slate-300">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-white">1. What we collect</h2>
          <p>
            When you sign in with Google, we receive your name, email address and profile
            picture from Google. We store your email to manage your 3-day free trial and,
            if you upgrade, your Pro access. If you submit a Pro payment, we store the
            payment screenshot and transaction reference you upload so our team can review
            and approve it.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-semibold text-white">2. How we use your data</h2>
          <p>
            Your data is used only to operate the service: creating your account, tracking
            your trial period, processing Pro upgrades, and communicating about your
            account. We do not sell your personal data and we do not share it with third
            parties for marketing.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-semibold text-white">3. Payments</h2>
          <p>
            Pro payments are made manually via Binance transfer. We never see or store your
            Binance credentials — only the screenshot and transaction reference you choose
            to upload.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-semibold text-white">4. Cookies</h2>
          <p>
            We use a secure session cookie to keep you signed in. It contains no tracking
            or advertising data.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-semibold text-white">5. Data retention & deletion</h2>
          <p>
            We keep your account data while your account exists. You can request deletion
            of your account and data at any time by contacting us at the email below.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-semibold text-white">6. Contact</h2>
          <p>
            For privacy questions or deletion requests, contact:{" "}
            <span className="text-slate-100">smartworkx5@gmail.com</span>
          </p>
        </section>
      </div>
    </main>
  );
}
