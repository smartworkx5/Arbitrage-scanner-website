import Link from "next/link";

/** Trial call-to-action banner shown at the end of guides and blog pages. */
export default function TrialCta() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-16 pt-4">
      <div className="card text-center !border-green-500/30">
        <h2 className="text-xl font-bold text-white">
          See these spreads live — free for 3 days
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-slate-400">
          Cryptoscopia scans 16 exchanges in real time and ranks live arbitrage
          gaps. Start your free trial — no credit card required.
        </p>
        <Link href="/signin" className="btn-primary mt-5">
          Start Free 3-Day Trial
        </Link>
      </div>
    </section>
  );
}
