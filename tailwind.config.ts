import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#22c55e",
          blue: "#3b82f6",
          dark: "#0a0e17",
          card: "#111827",
        },
      },
    },
  },
  plugins: [],
};

export default config;
