import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { put } from "@vercel/blob";
import { authOptions } from "@/lib/auth";
import { createPayment, isDbConfigured } from "@/lib/db";

export const dynamic = "force-dynamic";

const MAX_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = ["image/png", "image/jpeg"];

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  if (!email) {
    return NextResponse.json({ error: "You must be signed in to submit a payment." }, { status: 401 });
  }

  if (!isDbConfigured()) {
    return NextResponse.json(
      { error: "Payments are not available right now (database not configured). Please try again later." },
      { status: 503 }
    );
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Could not read the submitted form." }, { status: 400 });
  }

  const file = form.get("screenshot") as unknown as File | null;
  const txnRef = String(form.get("txn_ref") ?? "").trim().slice(0, 200);

  if (!file || file.size === 0) {
    return NextResponse.json({ error: "Please attach a screenshot of your transfer." }, { status: 400 });
  }
  if (file.size > MAX_SIZE) {
    return NextResponse.json({ error: "Screenshot must be 5 MB or smaller." }, { status: 400 });
  }
  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json({ error: "Screenshot must be a PNG or JPG image." }, { status: 400 });
  }
  if (!txnRef) {
    return NextResponse.json({ error: "Please provide your Binance transaction ID / sender note." }, { status: 400 });
  }

  // Upload the screenshot. If Blob storage isn't configured we still record the
  // payment (screenshot_url = null) so nothing is lost.
  let screenshotUrl: string | null = null;
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const blob = await put(`payments/${Date.now()}-${safeName}`, file, { access: "public" });
      screenshotUrl = blob.url;
    } catch (err) {
      console.error("[payments] blob upload failed:", err);
      return NextResponse.json(
        { error: "Screenshot upload failed. Please try again." },
        { status: 500 }
      );
    }
  } else {
    console.warn("[payments] BLOB_READ_WRITE_TOKEN not set — recording payment without screenshot URL.");
  }

  try {
    await createPayment(email, screenshotUrl, txnRef);
  } catch (err) {
    console.error("[payments] DB insert failed:", err);
    return NextResponse.json({ error: "Could not save your payment. Please try again later." }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    message:
      "Payment submitted successfully. It is now under review — your Pro access will be activated as soon as it is approved.",
  });
}
