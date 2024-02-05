"use client";

import React, { useState } from "react";
import Link from "next/link";

const TrialMessage = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <>
      <div
        className={
          !clicked ? "flex justify-center trialHeader darkGrey" : "hidden"
        }
      >
        <Link href="/pages/register">
          <p className="text-sm pr-10">Create an account to save your data</p>
        </Link>
        <button className="text-sm justify-end" onClick={handleClick}>
          X
        </button>{" "}
      </div>
    </>
  );
};

export default TrialMessage;
