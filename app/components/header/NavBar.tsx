"use client";
import React, { useState } from "react";
import Hamburger from "./subComponents/Hamburger";
import NavLinks from "./subComponents/NavLinks";

const NavBar: React.FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <nav
      className={
        !clicked
          ? "navUnclicked flex justify-end  w-screen navBar"
          : "flex justify-end  w-screen navBar"
      }
    >
      {!clicked ? (
        <Hamburger clicked={clicked} setClicked={setClicked} />
      ) : (
        <NavLinks clicked={clicked} setClicked={setClicked} />
      )}
    </nav>
  );
};

export default NavBar;
