"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavBar = () => {
  // const pathname = usePathname();
  // const splitPathname = pathname.split("/");
  // const username: string = splitPathname[splitPathname.length - 1];

  const token = localStorage.getItem("token");
  // const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };

  return (
    <>
      <nav className="links">
        <Link href="/">Home</Link>
        {!token ? (
          <>
            <Link href="/pages/login">Log In</Link>
            <Link href="/pages/register">Create Account</Link>
          </>
        ) : (
          <Link href="/" onClick={handleLogout}>
            Log Out
          </Link>
        )}
      </nav>
      <span className="material-symbols-outlined">menu</span>
    </>
  );
};

export default NavBar;
