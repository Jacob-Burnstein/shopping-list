import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <Link href="/pages/login">
        <div className="homeIcon yellow">Log In</div>
      </Link>
      <Link href="/pages/register">
        <div className="homeIcon green">Sign Up</div>
      </Link>
      <Link href="/pages/trial">
        <div className="homeIcon darkGrey">Try it out</div>
      </Link>
    </>
  );
};

export default HomePage;
