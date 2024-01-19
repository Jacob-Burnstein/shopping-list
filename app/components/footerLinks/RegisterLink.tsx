"use client";
import React from "react";
import Link from "next/link";

const RegisterLink = () => {
  return (
    <div>
      <Link href="../pages/register">
        <button>Create Account</button>
      </Link>
    </div>
  );
};

export default RegisterLink;
