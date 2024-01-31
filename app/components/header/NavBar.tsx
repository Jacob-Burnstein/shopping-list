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
      <div className="menu-icon" onClick={handleNavClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <section
        className="navBar cursor-pointer flex flex-col"
        onClick={handleNavClick}
      >
        <nav className={navClick ? "z-20" : "hidden"}>
          {!token ? (
            <nav className="linksContainer flex flex-col text-right">
              <Link className="navLink" href="/">
                Home
              </Link>
              <Link className="navLink" href="/pages/login">
                Log In
              </Link>
              <Link className="navLink" href="/pages/register">
                Create Account
              </Link>
            </nav>
          ) : (
            <nav className="linksContainer flex flex-col text-right">
              <Link className="navLink" href={`/pages/user/${username}`}>
                My Stores
              </Link>
              <Link className="navLink" href="/" onClick={handleLogout}>
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
