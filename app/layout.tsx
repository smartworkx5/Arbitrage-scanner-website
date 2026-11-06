import type { Metadata, Viewport } from "next";
// Self-hosted fonts (Redesign Phase 3): Inter Variable for text,
// IBM Plex Mono 400/500/600 for data. No third-party font requests.
import "@fontsource-variable/inter";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "./globals.css";
import { Providers } from "./providers";
import DeviceId from "./components/DeviceId";
import { Analytics } from "./components/Analytics";
import RefCapture from "./components/RefCapture";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import MobileTrialBar from "./components/MobileTrialBar";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, EXCHANGE_COUNT } from "@/lib/site";
import { siteJsonLd } from "./components/Seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Cryptoscopia | Crypto Arbitrage Scanner — Real-Time Price Gaps Across ${EXCHANGE_COUNT} Exchanges`,
    template: "%s | Cryptoscopia",
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
  // Google Search Console verification.
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "e3YaSAklr9EKNfN9qkxsj2-xot68m2wk-3VCGbV7fJc",
  },
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
        <Providers>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <MobileTrialBar />
        </Providers>
        <DeviceId />
        <RefCapture />
        <Analytics />
      </body>
    </html>
  );
}
