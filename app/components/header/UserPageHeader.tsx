"use client";

import React from "react";
import apiClient from "../../api/utils/apiClient";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const UserPageHeader = () => {
  const [username, setUsername] = useState<string>("");

  const pathname = usePathname();
  const splitPathname = pathname.split("/");
  const userIdToUse: number = parseInt(splitPathname[splitPathname.length - 1]);

  useEffect(() => {
    const getUsername = async () => {
      try {
        const { data } = await apiClient.get(`/users/account/${userIdToUse}`);
        setUsername(data.UserName);
      } catch (err) {
        console.error(err);
      }
    };
    getUsername();
  }, []);

  return <>{username ? <h1>{username}'s Stores</h1> : <h1>Welcome</h1>}</>;
};

export default UserPageHeader;
