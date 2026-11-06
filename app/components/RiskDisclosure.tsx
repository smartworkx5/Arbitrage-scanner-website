/**
 * Shared risk disclosure — the site's honesty is a brand asset, so the
 * wording lives in exactly one place and every surface renders the same
 * text. Server component; safe to use anywhere.
 */
export default function RiskDisclosure({
  className = "",
}: {
  className?: string;
}) {
  return (
    <p className={`text-xs leading-relaxed text-slate-400 ${className}`}>
      Disclaimer: Crypto trading involves substantial risk of loss. Signals and
      data shown here are informational tools,{" "}
      <span className="text-slate-300">not financial advice</span>. No scanner
      can guarantee profits. Never trade with money you cannot afford to lose.
    </p>
  );
}
