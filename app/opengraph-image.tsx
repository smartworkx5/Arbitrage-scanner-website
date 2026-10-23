import { ImageResponse } from "next/og";

export const alt = "Cryptoscopia — Crypto Arbitrage Scanner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Branded social-share image (Open Graph) for Cryptoscopia. */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#0a0e17",
          padding: "0 80px",
        }}
      >
        <svg width="300" height="300" viewBox="0 0 64 64" fill="none">
          <defs>
            <linearGradient id="g" x1="8" y1="56" x2="56" y2="8" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#10B981" />
              <stop offset="1" stopColor="#2DD4BF" />
            </linearGradient>
          </defs>
          <circle
            cx="32"
            cy="32"
            r="20"
            stroke="url(#g)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="94 31.66"
            strokeDashoffset="15.85"
          />
          <path
            d="M24 40 L41.5 22.5 M41.5 22.5 H34 M41.5 22.5 V30"
            stroke="#F0FDF9"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", marginLeft: 56 }}>
          <div style={{ fontSize: 84, fontWeight: 800, color: "#f8fafc", letterSpacing: -1 }}>
            Cryptoscopia
          </div>
          <div
            style={{
              fontSize: 27,
              fontWeight: 700,
              color: "#2dd4bf",
              letterSpacing: 6,
              marginTop: 14,
            }}
          >
            CRYPTO ARBITRAGE SCANNER
          </div>
          <div style={{ fontSize: 31, color: "#94a3b8", marginTop: 18 }}>
            Real-time price gaps across 16 exchanges
          </div>
        </div>
      </div>
    ),
    size
  );
}
