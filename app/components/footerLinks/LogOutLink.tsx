"use client";

import React from "react";
import Link from "next/link";

const handleLogout = () => {
  localStorage.removeItem("token");
};

const LogOutLink = () => {
  return (
    <div>
      <Link href="/" onClick={handleLogout}>
        Log Out
      </Link>
    </div>
  );
};

export default LogOutLink;
