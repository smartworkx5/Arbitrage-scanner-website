import type { Config } from "tailwindcss";

/**
 * Cryptoscopia design tokens (Redesign Phase 3, Milestone 1).
 *
 * Direction: "precision instrument" — dark base, SOLID emerald accent
 * (no gradients), semantic gain/loss colours that are always paired with
 * sign + label in the UI, self-hosted Inter for text and IBM Plex Mono
 * (tabular numerals) for data.
 *
 * The legacy `brand.*` names are kept because existing markup references
 * the palette values; new work should prefer `base`, `accent`, `gain`,
 * `loss` and `warn`.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Legacy brand tokens — kept for backwards compatibility.
        brand: {
          green: "#22c55e",
          blue: "#3b82f6",
          dark: "#0a0e17",
          card: "#111827",
        },
        // Surfaces (dark base family around #0a0e17).
        base: {
          950: "#060910",
          900: "#0a0e17", // page background
          850: "#0d1220",
          800: "#111827", // card surface (same value as brand.card)
          700: "#1b2436", // raised surface / hover
        },
        // Primary accent — solid emerald, never a gradient.
        accent: {
          DEFAULT: "#10b981", // emerald-500
          strong: "#059669", // emerald-600 (hover/active)
          soft: "#34d399", // emerald-400 (text on dark)
          dim: "#064e3b", // emerald-900 (tinted backgrounds)
        },
        // Semantic data colours. Always pair with +/- sign and a label.
        gain: {
          DEFAULT: "#34d399",
          strong: "#10b981",
        },
        loss: {
          DEFAULT: "#f87171",
          strong: "#ef4444",
        },
        warn: {
          DEFAULT: "#fbbf24",
          strong: "#f59e0b",
        },
      },
      fontFamily: {
        sans: [
          '"Inter Variable"',
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
        mono: [
          '"IBM Plex Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
