"use client";

import React from "react";
import Link from "next/link";

const LoginButton = () => {
  return (
    <div>
      <Link href="./login">
        <button>Log In</button>
      </Link>
    </div>
  );
};

export default LoginButton;
