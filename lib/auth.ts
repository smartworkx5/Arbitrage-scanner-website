import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { getUser } from "@/lib/db";

export const googleConfigured = Boolean(
  process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
);

export const authOptions: NextAuthOptions = {
  // Empty strings are safe at build time: NextAuth only validates them when a
  // sign-in request actually runs. The /signin page shows a setup hint instead.
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  // Stay signed in until the user signs out manually. The session token
  // lives 10 years and is refreshed on active use (updateAge 1 day), so
  // in practice it only ends on manual sign-out (or clearing cookies /
  // site data). This is deliberate: the user asked for no automatic
  // logouts. The PACKAGE (trial / Pro) still expires on its own dates —
  // only the sign-in itself is persistent.
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 365 * 10,
    updateAge: 60 * 60 * 24,
  },
  callbacks: {
    // Do NOT create the user row here. One device = one account is
    // enforced by the gated pages (/dashboard, /api/app-session): they
    // check the device binding FIRST and only then create the user row
    // (those gates call createUser in lib/db). Creating the
    // row here would mint a second account for a blocked second email
    // before the device check ever ran.
    async signIn() {
      return true;
    },
    async session({ session }) {
      try {
        if (session.user?.email) {
          const dbUser = await getUser(session.user.email);
          if (dbUser) {
            session.user.plan = dbUser.plan;
            session.user.trialEndsAt = dbUser.trial_ends_at;
          }
        }
      } catch (err) {
        console.error("[auth] session DB lookup failed (demo mode?):", err);
      }
      return session;
    },
  },
};
