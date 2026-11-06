export default function Loading() {
  return (
    <div
      className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-16"
      role="status"
      aria-label="Loading"
    >
      <span className="h-10 w-10 animate-spin rounded-full border-2 border-slate-700 border-t-emerald-400" />
      <p className="mt-4 text-sm text-slate-400">Loading…</p>
    </div>
  );
}
