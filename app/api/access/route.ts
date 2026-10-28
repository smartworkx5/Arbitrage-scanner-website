import { NextRequest, NextResponse } from "next/server";
import { getUser, isDbConfigured, isProActive, proExpiresAt } from "@/lib/db";
import { resolveDeviceAccess } from "@/lib/device";
import { isLifetimeAdmin } from "@/lib/admin";

export const dynamic = "force-dynamic";

/**
 * Access-verification API for the Crypto Arbitrage Scanner app.
 *
 * The app calls this before granting access:
 *   GET /api/access?email=user@example.com
 *   Header: x-api-key: <APP_API_KEY>
 *
 * Response: { email, hasAccess, plan, trialActive, trialEndsAt }
 *
 * Rules enforced (same as the website):
 * - No Google sign-in (no user row)  -> hasAccess: false
 * - Signed in, trial within 3 days   -> hasAccess: true
 * - Trial expired and not paid       -> hasAccess: false (must buy Pro)
 * - Paid and within 30 days of payment -> hasAccess: true
 * - Paid but past its 30-day expiry  -> hasAccess: false (renew Pro)
 */
export async function GET(req: NextRequest) {
  const apiKey = process.env.APP_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Access API not configured." }, { status: 503 });
  }
  if (req.headers.get("x-api-key") !== apiKey) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const email = req.nextUrl.searchParams.get("email")?.trim().toLowerCase();
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Missing or invalid ?email= parameter." }, { status: 400 });
  }

  // One device = one account, when the caller sends a device id
  // (?device_id= or header x-device-id). Callers that send none cannot
  // be checked — that is the old native-app path, which must be updated
  // to send its device id before this gate can block it.
  const deviceId =
    req.nextUrl.searchParams.get("device_id") ??
    req.headers.get("x-device-id");
  if (deviceId) {
    const deviceAccess = await resolveDeviceAccess(
      deviceId,
      email,
      req.headers.get("user-agent")
    );
    if (!deviceAccess.allowed) {
      return NextResponse.json({
        email,
        hasAccess: false,
        plan: null,
        reason: "device_already_registered",
        registeredEmailMasked: deviceAccess.registeredEmailMasked,
      });
    }
  }

  // Lifetime admin: full access regardless of trial/payment state.
  if (isLifetimeAdmin(email)) {
    return NextResponse.json({
      email,
      hasAccess: true,
      plan: "lifetime",
      trialActive: true,
      trialEndsAt: null,
    });
  }

  if (!isDbConfigured()) {
    return NextResponse.json({ error: "Database not configured." }, { status: 503 });
  }

  let user;
  try {
    user = await getUser(email);
  } catch {
    return NextResponse.json({ error: "Database query failed." }, { status: 500 });
  }

  if (!user) {
    return NextResponse.json({ email, hasAccess: false, plan: null, reason: "no_account" });
  }

  const trialActive = user.trial_ends_at
    ? new Date(user.trial_ends_at).getTime() > Date.now()
    : false;
  const isPaid = isProActive(user);

  return NextResponse.json({
    email,
    hasAccess: isPaid || trialActive,
    plan: user.plan,
    trialActive,
    trialEndsAt: user.trial_ends_at,
    proExpiresAt: proExpiresAt(user),
  });
}
