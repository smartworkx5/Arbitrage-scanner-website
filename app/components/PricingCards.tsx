import Link from "next/link";
import { Check } from "lucide-react";
import {
  FREE_TRIAL_PLAN,
  PRO_PLAN,
  HOW_PAYING_STEPS,
  HOW_PAYING_NOTE,
  type PricingPlan,
} from "@/lib/pricing";

/**
 * Pricing cards + "How paying works" block (Redesign Phase 4).
 * Facts come from lib/pricing.ts so the homepage section and the
 * /pricing page can never drift apart. Cards are flex columns with the
 * feature list growing, so the CTA buttons align at the bottom.
 */
function PlanCard({ plan, primary }: { plan: PricingPlan; primary?: boolean }) {
  return (
    <article
      className={`card relative flex flex-col ${primary ? "border-emerald-500/40" : ""}`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-6 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-black">
          {plan.badge}
        </span>
      )}
      <h3 className="text-xl font-semibold">{plan.name}</h3>
      <p className="mt-2 text-4xl font-extrabold">
        {plan.price}{" "}
        <span className="text-base font-normal text-slate-400">{plan.period}</span>
      </p>
      <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-300">
        {plan.features.map((li) => (
          <li key={li} className="flex gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
            {li}
          </li>
        ))}
      </ul>
      <Link
        href={plan.ctaHref}
        className={`${primary ? "btn-primary" : "btn-secondary"} mt-8 w-full`}
      >
        {plan.ctaLabel}
      </Link>
    </article>
  );
}

export function PricingCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <PlanCard plan={FREE_TRIAL_PLAN} />
      <PlanCard plan={PRO_PLAN} primary />
    </div>
  );
}

export function HowPayingWorks() {
  return (
    <div className="card mt-8">
      <h3 className="font-semibold text-slate-100">How paying works</h3>
      <ol className="mt-3 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
        {HOW_PAYING_STEPS.map((step, i) => (
          <li key={step}>
            <span className="font-bold text-emerald-400">{i + 1}.</span> {step}
          </li>
        ))}
      </ol>
      <p className="mt-3 text-xs text-slate-400">{HOW_PAYING_NOTE}</p>
    </div>
  );
}
