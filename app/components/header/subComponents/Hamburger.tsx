"use client";

import React, { useState } from "react";

interface HamburgerProps {
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hamburger: React.FC<HamburgerProps> = ({ clicked, setClicked }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLElement>) => {
    setClicked(!clicked);
  };

  return (
    <div
      className={!clicked ? "hamburger pr-3 pb-1" : "hidden"}
      onClick={handleNavClick}
    >
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default Hamburger;
