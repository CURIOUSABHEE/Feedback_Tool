"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";

const ButtonLogin = ({ session, extraStyle = "" }) => {
  const dashboardUrl = "/dashboard";
  if (session) {
    return (
      <Link href={dashboardUrl} className={"btn btn-primary " + extraStyle}>
        welcome back {session.user.name || "friend"}
      </Link>
    );
  } else {
    return (
      <button
        className={"btn btn-primary " + extraStyle}
        onClick={() => signIn(undefined, { callbackUrl: dashboardUrl })}
      >
        Get Started
      </button>
    );
  }
};

export default ButtonLogin;
