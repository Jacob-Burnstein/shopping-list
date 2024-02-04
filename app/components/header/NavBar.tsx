"use client";
import React, { useState } from "react";
import Hamburger from "./subComponents/Hamburger";
import NavLinks from "./subComponents/NavLinks";
import BackIcon from "./subComponents/BackIcon";

const NavBar: React.FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <nav className="flex justify-between  w-screen">
      <BackIcon />
      {!clicked ? (
        <Hamburger clicked={clicked} setClicked={setClicked} />
      ) : (
        <NavLinks clicked={clicked} setClicked={setClicked} />
      )}
    </nav>
  );
};

export default NavBar;
