import { NextResponse } from "next/server";
import { requireAdminEmail } from "@/lib/admin";
import { listAllUsers } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const admin = await requireAdminEmail();
  if (!admin) {
    return NextResponse.json({ error: "Access denied. Admins only." }, { status: 403 });
  }
  try {
    const users = await listAllUsers();
    return NextResponse.json({ users });
  } catch (err) {
    console.error("[admin] list users failed:", err);
    return NextResponse.json({ error: "Database not configured." }, { status: 503 });
  }
}
