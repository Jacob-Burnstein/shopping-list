"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import apiClient from "../../api/utils/apiClient";
import Link from "next/link";

const StorePageHeader = () => {
  const [storeName, setStoreName] = useState();
  const pathname = usePathname();
  const splitPathname = pathname.split("/");
  const storeIdToUse: number = parseInt(
    splitPathname[splitPathname.length - 1]
  );

  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  useEffect(() => {
    const getStoreName = async () => {
      try {
        const { data } = await apiClient.get(`/stores/${storeIdToUse}`);
        setStoreName(data.StoreName);
      } catch (err) {
        console.error(err);
      }
    };
    getStoreName();
  }, []);

  return (
    <>
      {token ? (
        <>
          <Link href={`/pages/user/${username}`}>
            {" "}
            <h1
              className="underline underline-offset-8 p-2 text-xl
        "
            >
              {storeName}
            </h1>{" "}
          </Link>
        </>
      ) : (
        <h1 className="underline underline-offset-4 p-2 text-xl">Welcome</h1>
      )}
    </>
  );
};

export default StorePageHeader;
