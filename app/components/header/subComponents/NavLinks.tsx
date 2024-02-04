"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { removeToken, getToken } from "../../../utils/tokenStorage";
import apiClient from "../../../api/utils/apiClient";

interface NavLinksProps {
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks: React.FC<NavLinksProps> = ({ clicked, setClicked }) => {
  const [username, setUsername] = useState<string>("");

  const handleLogout = () => {
    removeToken();
  };

  const token = getToken();

  useEffect(() => {
    const getUsername = async () => {
      try {
        const response = await apiClient.get("users");
        const username = response.data.UserName;
        setUsername(username);
      } catch (err) {
        console.error(err);
      }
    };
    getUsername();
  }, []);

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
