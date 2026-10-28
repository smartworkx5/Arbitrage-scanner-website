import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { DEVICE_COOKIE, resolveDeviceAccess } from "@/lib/device";
import { createUser, getUser, isDbConfigured, isProActive, proExpiresAt } from "@/lib/db";
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
export async function GET(req: NextRequest) {
  const headers = { "Cache-Control": "no-store" };

  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  if (!email) {
    return NextResponse.json(
      { hasAccess: false, reason: "no_session" },
      { headers }
    );
  }

  // One device = one account (the scanner's gate — the shell itself is
  // ungated, so this is what actually stops a blocked second email
  // from using the app). Runs before the user row is read/created.
  const deviceAccess = await resolveDeviceAccess(
    req.cookies.get(DEVICE_COOKIE)?.value ?? null,
    email,
    req.headers.get("user-agent")
  );
  if (!deviceAccess.allowed) {
    return NextResponse.json(
      {
        hasAccess: false,
        reason: "device_already_registered",
        registeredEmailMasked: deviceAccess.registeredEmailMasked,
        email,
      },
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
    // User rows are created here (after the device check passes), not
    // in the NextAuth sign-in callback — see lib/auth.ts.
    let user = await getUser(email);
    if (!user) {
      user = await createUser(
        email,
        session.user.name ?? null,
        session.user.image ?? null
      );
    }
    if (!user) {
      return NextResponse.json(
        { hasAccess: false, reason: "no_account", email },
        { headers }
      );
    }

    // Pro is a 30-day purchase: an expired Pro no longer grants access
    // until renewed (the dashboard shows the expiry + renew button).
    const isPaid = isProActive(user);
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
        proExpiresAt: proExpiresAt(user),
      },
      { headers }
    );
  } catch {
    return NextResponse.json({ hasAccess: true, email }, { headers });
  }
}
