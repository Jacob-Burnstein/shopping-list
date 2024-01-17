"use client";
import React from "react";
import Link from "next/link";

const RegisterButton = () => {
  return (
    <div>
      <Link href="./register">
        <button onClick={() => console.log("click")}>Register</button>
      </Link>
    </div>
  );
};

export default RegisterButton;
