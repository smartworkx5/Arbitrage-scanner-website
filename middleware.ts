import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// Protects /dashboard, /payment, /admin (sign-in required).
//
// /app/* is deliberately NOT gated here. The scanner is a PWA whose
// service worker must be able to fetch /app/sw.js and precache the new
// app shell even when the visitor's session has expired — gating those
// files stranded signed-out users on the old, ungated app version
// forever (their update checks were redirected to /signin). The app
// shell itself holds no data: the app verifies the session server-side
// via /api/app-session on every boot (and every 5 minutes) and bounces
// signed-out / expired users to /signin or /payment before loading
// anything. Account and money surfaces stay server-gated below.
export default withAuth(
  async function middleware() {
    return NextResponse.next();
  },
  {
    pages: {
      signIn: "/signin",
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/payment/:path*", "/admin/:path*"],
};
