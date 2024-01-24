"use client";

import React, { useEffect, useState } from "react";
import AddStore from "./AddStore";

export interface Store {
  Id: number;
  StoreName: string;
  UserId: number;
}

const StoreList = () => {
  const [stores, setStores] = useState<Store[] | undefined>(undefined);

  const addNewStore = (newStore: Store) => {
    setStores((prevStores) => [...(prevStores || []), newStore]);
  };

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

  return (
    <>
      <div>
        {stores?.map((store: Store) => (
          <p key={store.Id}>{store.StoreName}</p>
        ))}
      </div>
      <AddStore addNewStore={addNewStore} />
    </>
  );
};

export default StoreList;
