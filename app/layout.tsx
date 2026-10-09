import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "./components/Analytics";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";
import { siteJsonLd } from "./components/Seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Crypto Arbitrage Scanner — Find Arbitrage Across 16 Exchanges",
    template: "%s | Crypto Arbitrage Scanner",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "crypto arbitrage scanner",
    "crypto arbitrage opportunities",
    "crypto price difference",
    "crypto arbitrage trading",
    "cross exchange arbitrage",
    "triangular arbitrage crypto",
    "funding rate arbitrage",
    "CEX DEX arbitrage",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Google Search Console verification: set GOOGLE_SITE_VERIFICATION env var
  // in Vercel to emit the verification meta tag automatically.
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#0a0e17",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteJsonLd()),
          }}
        />
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
