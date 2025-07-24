"use client";
import { signOut } from "next-auth/react";
const ButtonLogout = () => {
  return (
    <button className="btn btn-ghost" onClick={() => signOut()}>
      Log Out
    </button>
  );
};

export default ButtonLogout;
