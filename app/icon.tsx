import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

/** Cryptoscopia favicon — generated from the brand mark (scope "C" + breakout arrow). */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0e17",
          borderRadius: 112,
        }}
      >
        <svg width="380" height="380" viewBox="0 0 64 64" fill="none">
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
      </div>
    ),
    size
  );
}
