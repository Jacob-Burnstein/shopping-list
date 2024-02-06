import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-xl font-semibold pb-2">Home</h1>
      <main>
        <Link href="/pages/login">
          <div className="homeIcon green">
            <p className="homeIconText text-2xl text-center">Log In</p>
          </div>
        </Link>
        <Link href="/pages/register">
          <div className="homeIcon greyBlue">
            <p className="homeIconText text-2xl text-center">Create Account</p>
          </div>
        </Link>
        <Link href="/pages/trial">
          <div className="homeIcon darkGrey">
            <p className="homeIconText text-2xl bg-dce4e7 ">Try</p>
          </div>
        </Link>
      </main>
    </>
  );
}
