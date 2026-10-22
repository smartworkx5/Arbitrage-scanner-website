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
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.public.blob.vercel-storage.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
};

export default nextConfig;
