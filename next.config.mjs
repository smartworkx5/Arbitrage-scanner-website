/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // Domain migration: every page on the old vercel.app host redirects
  // permanently to the same path on cryptoscopia.com.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "crypto-rb-scanner.vercel.app" }],
        destination: "https://cryptoscopia.com/:path*",
        permanent: true,
      },
    ];
  },
  // Baseline security headers on every response.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
        ],
      },
    ];
  },
  // /app WIRING — DRAFT ONLY, staged 2026-10-28, NOT deployed.
  // Serves the CryptoScanner app (cryptoscanner-tan.vercel.app) from
  // cryptoscopia.com/app while keeping the Next site's own API routes
  // (/api/app-session, /api/access, /api/admin/*) untouched: only the
  // scanner's own API paths are proxied. beforeFiles so it wins over
  // the old /app shell route. Deploy ONLY after the scanner API fix
  // is live (its /api/* currently 500) and the project framework is
  // switched back from vite to Next.js.
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/app", destination: "https://cryptoscanner-tan.vercel.app/" },
        {
          source: "/app/:path*",
          destination: "https://cryptoscanner-tan.vercel.app/:path*",
        },
        {
          source: "/api/exchanges",
          destination: "https://cryptoscanner-tan.vercel.app/api/exchanges",
        },
        {
          source: "/api/batch",
          destination: "https://cryptoscanner-tan.vercel.app/api/batch",
        },
        {
          source: "/api/arbitrage",
          destination: "https://cryptoscanner-tan.vercel.app/api/arbitrage",
        },
        {
          source: "/api/cex-dex-arbitrage",
          destination:
            "https://cryptoscanner-tan.vercel.app/api/cex-dex-arbitrage",
        },
        {
          source: "/api/scan",
          destination: "https://cryptoscanner-tan.vercel.app/api/scan",
        },
        {
          source: "/api/exchange-spreads",
          destination: "https://cryptoscanner-tan.vercel.app/api/exchange-spreads",
        },
        {
          source: "/api/movers",
          destination: "https://cryptoscanner-tan.vercel.app/api/movers",
        },
        {
          source: "/api/symbol/:path*",
          destination: "https://cryptoscanner-tan.vercel.app/api/symbol/:path*",
        },
      ],
    };
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.public.blob.vercel-storage.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
};

export default nextConfig;
