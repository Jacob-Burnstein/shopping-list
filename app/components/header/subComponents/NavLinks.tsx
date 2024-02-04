import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import Link from "next/link";

interface NavLinksProps {
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks: React.FC<NavLinksProps> = ({ clicked, setClicked }) => {
  const { token, logout, username } = useAuth();

  const handleLogout = () => {
    logout();
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
          <nav
            onClick={handleNavClick}
            className="linksContainer flex flex-col text-right"
          >
            <Link className="navLink" href={`/pages/user/${username}`}>
              My Stores
            </Link>
            <Link className="navLink" href="/" onClick={handleLogout}>
              Log Out
            </Link>
          </nav>
        )}
      </nav>
    </div>
  );
};

export default NavLinks;
