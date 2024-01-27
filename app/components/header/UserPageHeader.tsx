"use client";

import React from "react";
import { usePathname } from "next/navigation";

const UserPageHeader = () => {
  const pathname = usePathname();
  const splitPathname = pathname.split("/");
  const username: string = splitPathname[splitPathname.length - 1];

  const token = localStorage.getItem("token");

  return (
    <>
      {token ? (
        <h1
          className="underline underline-offset-8 p-2 text-xl
  "
        >
          {username}
        </h1>
      ) : (
        <h1>Welcome</h1>
      )}
    </>
  );
};

export default UserPageHeader;
