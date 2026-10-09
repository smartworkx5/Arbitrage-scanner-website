import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

// Protects /dashboard, /payment, /admin (sign-in required) and /app/*
// (sign-in + active trial or paid plan required). Visitors without a
// session are redirected to /signin; users whose trial expired are sent
// to /payment (browser) or receive 403 (API/fetch calls).
export default withAuth(
  async function middleware(req) {
    const { pathname } = req.nextUrl;

    if (pathname.startsWith("/app")) {
      const email = req.nextauth?.token?.email as string | undefined;
      let hasAccess = false;

      if (email) {
        try {
          const { rows } = await sql`
            SELECT plan, trial_ends_at FROM users WHERE email = ${email} LIMIT 1
          `;
          const u = rows[0] as
            | { plan: string; trial_ends_at: string | null }
            | undefined;
          const isPaid = u?.plan === "paid";
          // Same fail-open rule as the dashboard: no row/data -> allow.
          const trialActive = u?.trial_ends_at
            ? new Date(u.trial_ends_at).getTime() > Date.now()
            : true;
          hasAccess = isPaid || trialActive;
        } catch {
          // Fail open on DB error (consistent with dashboard behaviour).
          hasAccess = true;
        }
      }

      if (!hasAccess) {
        const wantsHtml = req.headers.get("accept")?.includes("text/html");
        if (wantsHtml) {
          return NextResponse.redirect(new URL("/payment?expired=1", req.url));
        }
        return new NextResponse(JSON.stringify({ error: "Trial expired" }), {
          status: 403,
          headers: { "content-type": "application/json" },
        });
      }
    }

    return NextResponse.next();
  },
  {
    pages: {
      signIn: "/signin",
    },
  }
);

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/payment/:path*",
    "/admin/:path*",
    "/app/:path*",
  ],
};
