import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { claimReferral, getReferralStats, isDbConfigured } from "@/lib/db";

export const dynamic = "force-dynamic";

/** GET — the signed-in user's referral code, link stats. POST — claim a referral code. */
export async function GET() {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email?.toLowerCase();
  if (!email) return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  if (!isDbConfigured()) {
    return NextResponse.json({ error: "Database not configured." }, { status: 503 });
  }
  try {
    const stats = await getReferralStats(email);
    return NextResponse.json(stats);
  } catch {
    return NextResponse.json({ error: "Could not load referral data." }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email?.toLowerCase();
  if (!email) return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  if (!isDbConfigured()) {
    return NextResponse.json({ error: "Database not configured." }, { status: 503 });
  }
  const body = (await req.json().catch(() => null)) as { code?: string } | null;
  if (!body?.code) return NextResponse.json({ error: "Missing code." }, { status: 400 });
  try {
    const result = await claimReferral(email, body.code);
    return NextResponse.json({ result });
  } catch {
    return NextResponse.json({ error: "Could not claim referral." }, { status: 500 });
  }
}
