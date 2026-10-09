"use client";

import { useEffect, useState } from "react";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export default function TrialCountdown({ trialEndsAt }: { trialEndsAt: string }) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const end = new Date(trialEndsAt).getTime();
  const diff = Math.max(0, end - now);

  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const mins = Math.floor((diff % 3_600_000) / 60_000);
  const secs = Math.floor((diff % 60_000) / 1000);

  if (diff <= 0) {
    return <p className="text-lg font-semibold text-red-400">Your trial has expired.</p>;
  }

  return (
    <div aria-live="polite">
      <p className="text-sm text-slate-400">Trial time remaining</p>
      <p className="mt-2 font-mono text-4xl font-extrabold tracking-tight">
        <span className="text-green-400">{days}</span>
        <span className="text-slate-500 text-2xl">d </span>
        <span className="text-green-400">{pad(hours)}</span>
        <span className="text-slate-500 text-2xl">h </span>
        <span className="text-green-400">{pad(mins)}</span>
        <span className="text-slate-500 text-2xl">m </span>
        <span className="text-green-400">{pad(secs)}</span>
        <span className="text-slate-500 text-2xl">s</span>
      </p>
    </div>
  );
}
