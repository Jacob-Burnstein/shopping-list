"use client";
import React, { useState } from "react";
import Hamburger from "./subComponents/Hamburger";
import NavLinks from "./subComponents/NavLinks";

const NavBar: React.FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <nav className="flex justify-end  w-screen">
      {!clicked ? (
        <Hamburger clicked={clicked} setClicked={setClicked} />
      ) : (
        <NavLinks clicked={clicked} setClicked={setClicked} />
      )}
    </nav>
  );
};

export default NavBar;
