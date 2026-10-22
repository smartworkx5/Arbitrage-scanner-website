"use client";

import { useEffect } from "react";

/** Stores a ?ref=CODE referral code (from any page) in a 30-day cookie.
 *  The dashboard claims it against the signed-in account. Renders nothing. */
export default function RefCapture() {
  useEffect(() => {
    try {
      const ref = new URLSearchParams(window.location.search).get("ref");
      if (ref && /^[A-Za-z0-9]{6,10}$/.test(ref)) {
        document.cookie = `cr_ref=${ref.toUpperCase()}; path=/; max-age=2592000; SameSite=Lax`;
      }
    } catch {
      /* ignore */
    }
  }, []);
  return null;
}
