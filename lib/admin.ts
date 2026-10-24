import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export function getAdminEmails(): string[] {
  return (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

/**
 * Lifetime-Pro admin (user-confirmed 2026-10-24): ONLY this email is the
 * admin and gets lifetime free Pro access to the scanner app — no 3-day
 * trial limit, no upgrade prompts. Hardcoded (not env-dependent) so no
 * other email can gain lifetime access even if ADMIN_EMAILS changes.
 */
export const ADMIN_LIFETIME_EMAIL = "tasleemsanjrani.xd@gmail.com";

export function isLifetimeAdmin(email: string | null | undefined): boolean {
  if (!email) return false;
  return email.toLowerCase() === ADMIN_LIFETIME_EMAIL;
}

export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  return getAdminEmails().includes(email.toLowerCase());
}

export async function requireAdminEmail(): Promise<string | null> {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email ?? null;
  return isAdminEmail(email) ? email : null;
}
