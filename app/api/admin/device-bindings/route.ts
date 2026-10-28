import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { isAdminEmail } from "@/lib/admin";
import {
  deleteDeviceBinding,
  isDbConfigured,
  listDeviceBindings,
} from "@/lib/db";

export const dynamic = "force-dynamic";

async function requireAdmin() {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  return email && isAdminEmail(email) ? email : null;
}

/** Admin-only: list device → email bindings (for unbinding a sold/changed phone). */
export async function GET() {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  if (!isDbConfigured()) {
    return NextResponse.json({ error: "Database not configured." }, { status: 503 });
  }
  try {
    const bindings = await listDeviceBindings();
    return NextResponse.json({ bindings });
  } catch {
    return NextResponse.json({ error: "Database query failed." }, { status: 500 });
  }
}

/** Admin-only: unbind one device (?device_id=…), freeing it for a new email. */
export async function DELETE(req: NextRequest) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  const deviceId = req.nextUrl.searchParams.get("device_id");
  if (!deviceId) {
    return NextResponse.json({ error: "Missing ?device_id= parameter." }, { status: 400 });
  }
  try {
    await deleteDeviceBinding(deviceId);
    return NextResponse.json({ ok: true, device_id: deviceId });
  } catch {
    return NextResponse.json({ error: "Database query failed." }, { status: 500 });
  }
}
