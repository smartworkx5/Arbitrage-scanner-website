"use client";

import type { ContentBlock } from "@/lib/content";

/** Minimal inline markdown: **bold** and [text](/url) links. */
function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-slate-100">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const external = href.startsWith("http");
      return (
        <a
          key={i}
          href={href}
          className="text-emerald-300 underline decoration-emerald-500/40 underline-offset-2 hover:text-emerald-200"
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {label}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function ArticleBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6 text-slate-300">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i} className="leading-relaxed">
                {renderInline(block.text)}
              </p>
            );
          case "h2": {
            const id = slugify(block.text);
            return (
              <h2
                key={i}
                id={id}
                className="scroll-mt-24 pt-4 text-2xl font-bold tracking-tight text-white"
              >
                {block.text}
              </h2>
            );
          }
          case "h3":
            return (
              <h3 key={i} className="pt-2 text-xl font-semibold text-white">
                {block.text}
              </h3>
            );
          case "list":
            return (
              <ul key={i} className="list-disc space-y-2 pl-6 leading-relaxed">
                {block.items.map((item, j) => (
                  <li key={j}>{renderInline(item)}</li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <div
                key={i}
                className={`rounded-xl border p-5 ${
                  block.tone === "warning"
                    ? "border-amber-500/30 bg-amber-500/10"
                    : "border-emerald-500/30 bg-emerald-500/10"
                }`}
              >
                <p className="font-semibold text-white">{block.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">
                  {renderInline(block.text)}
                </p>
              </div>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead>
                    <tr className="bg-slate-900/80">
                      {block.headers.map((h, j) => (
                        <th key={j} className="px-4 py-3 font-semibold text-white">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r} className="border-t border-slate-800/60">
                        {row.map((cell, c) => (
                          <td key={c} className="px-4 py-3 text-slate-300">
                            {renderInline(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "proscons":
            return (
              <div key={i} className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">
                  <p className="font-semibold text-emerald-300">Pros</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                    {block.pros.map((x, j) => (
                      <li key={j}>{renderInline(x)}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                  <p className="font-semibold text-red-300">Cons & risks</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                    {block.cons.map((x, j) => (
                      <li key={j}>{renderInline(x)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          case "faq":
            return (
              <div key={i} className="space-y-3">
                {block.items.map((f, j) => (
                  <details
                    key={j}
                    className="group rounded-xl border border-slate-800 bg-slate-900/50 p-4"
                  >
                    <summary className="cursor-pointer font-medium text-white">
                      {f.q}
                    </summary>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {renderInline(f.a)}
                    </p>
                  </details>
                ))}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
