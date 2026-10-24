import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getUser, isDbConfigured } from "@/lib/db";
import { isLifetimeAdmin } from "@/lib/admin";

export const dynamic = "force-dynamic";

/**
 * Session-based access check for the scanner app (GET /api/app-session).
 *
 * Why this exists: the app is a PWA whose service worker caches the app
 * shell, so after the first visit the shell can load WITHOUT any request
 * reaching the server — bypassing the middleware paywall entirely. The
 * app therefore calls this endpoint on every boot (and periodically) and
 * only unlocks when the server confirms an active session with access.
 *
 * Standing states fail CLOSED (no session / no account / expired trial).
 * Infrastructure failures (DB down / not configured) fail OPEN, mirroring
 * the middleware's availability policy — an attacker cannot force those.
 *
 * Response: { hasAccess, reason?, email?, plan?, trialEndsAt? }
 */
export async function GET() {
  const headers = { "Cache-Control": "no-store" };

  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  if (!email) {
    return NextResponse.json(
      { hasAccess: false, reason: "no_session" },
      { headers }
    );
  }

  if (!isDbConfigured()) {
    return NextResponse.json({ hasAccess: true, email }, { headers });
  }

  // Lifetime admin: bypasses trial/Pro checks entirely — the app stays
  // open forever for this email, no expiry, no upgrade redirect.
  if (isLifetimeAdmin(email)) {
    return NextResponse.json(
      {
        hasAccess: true,
        reason: "admin_lifetime",
        email,
        plan: "lifetime",
        trialEndsAt: null,
      },
      { headers }
    );
  }

  try {
    const user = await getUser(email);
    if (!user) {
      return NextResponse.json(
        { hasAccess: false, reason: "no_account", email },
        { headers }
      );
    }

    const isPaid = user.plan === "paid";
    const trialActive = user.trial_ends_at
      ? new Date(user.trial_ends_at).getTime() > Date.now()
      : false;
    const hasAccess = isPaid || trialActive;

    return NextResponse.json(
      {
        hasAccess,
        reason: hasAccess ? "ok" : "expired",
        email,
        plan: user.plan,
        trialEndsAt: user.trial_ends_at,
      },
      { headers }
    );
  } catch {
    return NextResponse.json({ hasAccess: true, email }, { headers });
  }
}
