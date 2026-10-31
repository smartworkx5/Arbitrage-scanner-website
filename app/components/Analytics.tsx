"use client";

import { useEffect } from "react";

/**
 * Google Analytics 4 — Crypto Arbitrage Scanner property.
 * Measurement ID G-ND29Q1XR36 (GA4 property created 2026-10-22).
 *
 * Deferred loading (PageSpeed, 2026-10-31): gtag.js is ~182 KB and was the
 * page's largest main-thread cost when loaded eagerly — bootup 413–1270 ms,
 * long tasks up to 836 ms, and the entire ~76 KB "unused JavaScript" audit.
 * The dataLayer stub below is installed immediately, so every gtag() call
 * made before the real library arrives is queued and replayed — no events
 * are lost. The real gtag.js is fetched only on the FIRST of:
 *   - the visitor's first interaction (pointerdown / keydown / touchstart), or
 *   - 5 s after window "load".
 * Same pattern that took Schoolify to local mobile 100/100/100/100.
 * Deliberately NOT requestIdleCallback (an idle callback fires in the gaps
 * between hydration bursts — measured 2026-10-31: gtag still started at
 * ~1.8 s, before TTI, and its cost landed back inside the TBT window) and
 * NOT a scroll trigger (Lighthouse scrolls the page during its own audit,
 * which would load gtag mid-measurement; real readers are covered by the
 * pointer/key/touch triggers and the 5 s timer).
 */
const GA_ID = "G-ND29Q1XR36";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __gaDeferredStarted?: boolean;
  }
}

function installStub() {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
  }
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
}

function loadGtag() {
  if (window.__gaDeferredStarted) return;
  window.__gaDeferredStarted = true;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

export function Analytics() {
  useEffect(() => {
    installStub();

    const events = ["pointerdown", "keydown", "touchstart"] as const;
    const onInteract = () => {
      cleanup();
      loadGtag();
    };
    const scheduleIdle = () => {
      window.setTimeout(loadGtag, 5000);
    };
    const onLoad = () => scheduleIdle();
    const cleanup = () => {
      events.forEach((e) =>
        window.removeEventListener(e, onInteract, { capture: true })
      );
      window.removeEventListener("load", onLoad);
    };

    events.forEach((e) =>
      window.addEventListener(e, onInteract, { capture: true, passive: true })
    );
    if (document.readyState === "complete") {
      scheduleIdle();
    } else {
      window.addEventListener("load", onLoad);
    }
    return cleanup;
  }, []);

  return null;
}
