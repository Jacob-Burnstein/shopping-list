"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";

const NavBar = () => {
  const { token, logout, username } = useAuth();
  console.log("token from nav:", token);

  const [navClick, setNavClick] = useState<boolean>(false);

  const handleLogout = () => {
    logout();
  };

  const handleNavClick = (e: React.MouseEvent<HTMLElement>) => {
    setNavClick(!navClick);
  };

  return (
    <>
      <section className="navBar cursor-pointer z-10 border">
        <span
          className="material-symbols-outlined transform scale-150 relative"
          onClick={handleNavClick}
        >
          menu
        </span>
        <nav className={navClick ? "z-20" : "hidden"}>
          {!token ? (
            <nav className="linksContainer">
              <Link href="/">Home</Link>
              <Link href="/pages/login">Log In</Link>
              <Link href="/pages/register">Create Account</Link>
            </nav>
          ) : (
            <nav className="linksContainer flex flex-col">
              <Link href={`/pages/user/${username}`}>My Stores</Link>
              <Link href="/" onClick={handleLogout}>
                Log Out
              </Link>
            </nav>
          )}
        </nav>
      </section>
    </>
  );
};

export default NavBar;
