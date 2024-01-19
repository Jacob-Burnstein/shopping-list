"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface StoreList {
  storeid: number;
  storename: string;
  userId: number;
}

const StoreList = () => {
  const [stores, setStores] = useState<StoreList[] | undefined>(undefined);
  useEffect(() => {
    const getStores = async () => {
      try {
        const query = await fetch("http://localhost:3000/api/users/stores");
        const response = await query.json();
        setStores(response);
      } catch (err) {
        console.error(err);
      }
    };
    getStores();
  }, []);

  console.log("stores: ", stores);

  return (
    <div>
      {stores?.map((store: StoreList) => (
        <p key={store.storeid}>{store.storename}</p>
      ))}

      {/* <Link href="/store"> Store Name</Link> */}
    </div>
  );
};

export default StoreList;
