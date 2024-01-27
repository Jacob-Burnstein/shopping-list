"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import apiClient from "../../api/utils/apiClient";

const StorePageHeader = () => {
  const [storeName, setStoreName] = useState();
  const pathname = usePathname();
  const splitPathname = pathname.split("/");
  const storeIdToUse: number = parseInt(
    splitPathname[splitPathname.length - 1]
  );

  const token = localStorage.getItem("token");

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
        <h1
          className="underline underline-offset-8 p-2 text-xl
        "
        >
          {storeName}
        </h1>
      ) : (
        <h1 className="underline underline-offset-4 p-2 text-xl">Welcome</h1>
      )}
    </>
  );
};

export default StorePageHeader;
