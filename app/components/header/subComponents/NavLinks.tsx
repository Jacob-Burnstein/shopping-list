import React, { useState, useEffect } from "react";
import Link from "next/link";
import { removeToken, getToken } from "../../../utils/tokenStorage";
import { getUsername } from "../../../utils/getUsername";

interface NavLinksProps {
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks: React.FC<NavLinksProps> = ({ clicked, setClicked }) => {
  const token = getToken();
  const username = getUsername();

  const handleLogout = () => {
    removeToken();
  };

  const handleNavClick = (e: React.MouseEvent<HTMLElement>) => {
    setClicked(!clicked);
  };
  return (
    <div>
      <nav
        onClick={handleNavClick}
        className={
          !clicked ? "hidden" : "linksContainer flex flex-col text-right pr-3"
        }
      >
        {!token ? (
          <nav className="linksContainer flex flex-col text-right">
            <p className="navLink cursor-pointer" onClick={handleNavClick}>
              x
            </p>
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
          <>
            <p className="navLink cursor-pointer" onClick={handleNavClick}>
              x
            </p>
            <nav
              onClick={handleNavClick}
              className="linksContainer flex flex-col text-right"
            >
              {username && (
                <Link className="navLink" href={`/pages/user/${username}`}>
                  My Stores
                </Link>
              )}
              <Link className="navLink" href="/" onClick={handleLogout}>
                Log Out
              </Link>
            </nav>
          </>
        )}
      </nav>
    </div>
  );
};

export default NavLinks;
