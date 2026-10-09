import { NextRequest, NextResponse } from "next/server";
import { requireAdminEmail } from "@/lib/admin";
import { setPaymentStatus } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const admin = await requireAdminEmail();
  if (!admin) {
    return NextResponse.json({ error: "Access denied. Admins only." }, { status: 403 });
  }

  let body: { paymentId?: unknown; action?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const paymentId = Number(body.paymentId);
  const action = body.action;
  if (!Number.isInteger(paymentId) || paymentId <= 0) {
    return NextResponse.json({ error: "Invalid paymentId." }, { status: 400 });
  }
  if (action !== "approve" && action !== "reject") {
    return NextResponse.json({ error: "Action must be 'approve' or 'reject'." }, { status: 400 });
  }

  try {
    await setPaymentStatus(paymentId, action === "approve" ? "approved" : "rejected");
    return NextResponse.json({ ok: true, action });
  } catch (err) {
    console.error("[admin] setPaymentStatus failed:", err);
    return NextResponse.json({ error: "Database operation failed." }, { status: 500 });
  }
}
