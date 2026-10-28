"use client";

import { signIn, signOut } from "next-auth/react";
import { useEffect } from "react";

/**
 * The blocked second email is signed in at this point (Google already
 * returned), so sign it out first — otherwise the blocked session would
 * linger. Then offer sign-in with the account chooser, so the user can
 * pick their previous email instead of being auto-signed back into the
 * blocked one.
 */
export default function DeviceBlockedActions() {
  useEffect(() => {
    void signOut({ redirect: false });
  }, []);

  return (
    <button
      type="button"
      onClick={() =>
        signIn(
          "google",
          { callbackUrl: "/dashboard" },
          { prompt: "select_account" }
        )
      }
      className="btn-primary mt-6 w-full"
    >
      Sign in with your previous email
    </button>
  );
}
