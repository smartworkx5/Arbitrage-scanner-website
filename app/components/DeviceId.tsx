"use client";

import { useEffect } from "react";

// Keep in sync with DEVICE_COOKIE / DEVICE_STORAGE_KEY in lib/device.ts.
// (Not imported from there: that module pulls in the server database
// client, which must never be bundled into a client component.)
const DEVICE_COOKIE = "cs_device_id";
const DEVICE_STORAGE_KEY = "cs_device_id";

/**
 * One device = one account: give this browser a stable random id and keep
 * it in BOTH localStorage and a path=/ cookie, restoring one from the
 * other if only one survives (e.g. cookies cleared but storage kept).
 * The server reads the cookie on gated requests; the id itself carries
 * no personal data. Runs on every Next.js page via the root layout, so
 * it is already set on /signin before Google sign-in redirects away.
 */
function readCookie(): string | null {
  const match = document.cookie
    .split("; ")
    .find((part) => part.startsWith(`${DEVICE_COOKIE}=`));
  return match ? decodeURIComponent(match.slice(DEVICE_COOKIE.length + 1)) : null;
}

export function ensureDeviceId(): string {
  const fromCookie = readCookie();
  let fromStorage: string | null = null;
  try {
    fromStorage = window.localStorage.getItem(DEVICE_STORAGE_KEY);
  } catch {
    fromStorage = null;
  }
  const id = fromCookie || fromStorage || crypto.randomUUID().replace(/-/g, "");
  try {
    window.localStorage.setItem(DEVICE_STORAGE_KEY, id);
  } catch {
    // Storage unavailable (private mode) — the cookie alone still works.
  }
  document.cookie = `${DEVICE_COOKIE}=${encodeURIComponent(
    id
  )}; path=/; max-age=31536000; SameSite=Lax`;
  return id;
}

export default function DeviceId() {
  useEffect(() => {
    ensureDeviceId();
  }, []);
  return null;
}
