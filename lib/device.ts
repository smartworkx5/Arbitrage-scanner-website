// ---------------------------------------------------------------------------
// One device = one account (server-side device binding).
//
// How it works:
// - The browser/app generates a random device id once (see
//   app/components/DeviceId.tsx and the scanner shell in vite-app) and
//   stores it in localStorage + the `cs_device_id` cookie (path=/).
// - On every gated request the server looks that id up in
//   `device_bindings`. The FIRST email ever seen on a device wins:
//   a second email on the same device is blocked with
//   `device_already_registered` and shown the masked first email, and no
//   user row is created for the blocked email.
// - The reverse is intentionally NOT enforced: one email may still sign
//   in from several devices. Only one account per device is blocked.
// - Lifetime admins are exempt (and never create a binding), so an admin
//   testing from a device cannot poison that device for a real user, and
//   an admin can always reach /admin to unbind a device.
// - If no database is configured, or the device id is missing, the check
//   is skipped (fail-open, matching the existing access policy) — the
//   binding cannot be enforced without a database. On the website the
//   cookie is set on /signin before Google sign-in, so a normal login
//   always carries a device id.
// ---------------------------------------------------------------------------

import {
  bindDevice,
  getDeviceBinding,
  isDbConfigured,
  touchDeviceBinding,
} from "@/lib/db";
import { isLifetimeAdmin } from "@/lib/admin";

export const DEVICE_COOKIE = "cs_device_id";
export const DEVICE_STORAGE_KEY = "cs_device_id";

export function isValidDeviceId(value: string | null | undefined): value is string {
  return Boolean(value) && /^[A-Za-z0-9_-]{8,128}$/.test(value as string);
}

/** Show only enough of an email to recognise it: ta***@gmail.com */
export function maskEmail(email: string): string {
  const at = email.indexOf("@");
  if (at <= 0) return "***";
  const local = email.slice(0, at);
  const domain = email.slice(at + 1);
  return `${local.slice(0, 2)}***@${domain}`;
}

export type DeviceAccess =
  | { allowed: true; bound: boolean; skipped?: boolean }
  | {
      allowed: false;
      reason: "device_already_registered";
      registeredEmail: string;
      registeredEmailMasked: string;
    };

export async function resolveDeviceAccess(
  deviceId: string | null | undefined,
  email: string,
  userAgent: string | null = null
): Promise<DeviceAccess> {
  // Admins are exempt and never create bindings (see header comment).
  if (isLifetimeAdmin(email)) {
    return { allowed: true, bound: false, skipped: true };
  }
  if (!isDbConfigured() || !isValidDeviceId(deviceId)) {
    return { allowed: true, bound: false, skipped: true };
  }
  try {
    const binding = await getDeviceBinding(deviceId as string);
    if (!binding) {
      await bindDevice(deviceId as string, email, userAgent);
      return { allowed: true, bound: true };
    }
    if (binding.email.toLowerCase() === email.toLowerCase()) {
      await touchDeviceBinding(deviceId as string);
      return { allowed: true, bound: true };
    }
    return {
      allowed: false,
      reason: "device_already_registered",
      registeredEmail: binding.email,
      registeredEmailMasked: maskEmail(binding.email),
    };
  } catch (err) {
    // Fail open, matching the existing access policy: a DB outage must
    // not lock every legitimate user out of the scanner.
    console.error("[device] binding check failed, failing open:", err);
    return { allowed: true, bound: false, skipped: true };
  }
}
