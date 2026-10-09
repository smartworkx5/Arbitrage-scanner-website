import { NextResponse } from "next/server";
import { requireAdminEmail } from "@/lib/admin";
import { listPendingPayments } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const admin = await requireAdminEmail();
  if (!admin) {
    return NextResponse.json({ error: "Access denied. Admins only." }, { status: 403 });
  }
  try {
    const payments = await listPendingPayments();
    return NextResponse.json({ payments });
  } catch (err) {
    console.error("[admin] list pending failed:", err);
    return NextResponse.json({ error: "Database not configured." }, { status: 503 });
  }
}
