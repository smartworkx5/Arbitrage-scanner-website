"use client";

import Script from "next/script";

/**
 * Google Analytics 4 — Crypto Arbitrage Scanner property.
 * Measurement ID G-ND29Q1XR36 (GA4 property created 2026-10-22).
 */
export function Analytics() {
  const gaId = "G-ND29Q1XR36";
  if (!gaId) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
