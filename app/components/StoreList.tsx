"use client";

import React, { useEffect, useState } from "react";
import AddStore from "./AddStore";
import DeleteStore from "./DeleteStoreButton";
const jwt = require("jsonwebtoken");

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

  const deleteStore = (storeId: number) => {
    setStores((prevList) => prevList?.filter((store) => storeId != store.Id));
  };

  useEffect(() => {
    const getStores = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const query = await fetch("http://localhost:3000/api/users/stores", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
          const response = await query.json();
          setStores(response);
        }
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
          <section key={store.Id} className="storeCard">
            <p>{store.StoreName}</p>
            <DeleteStore id={store.Id} deleteStore={deleteStore} />
          </section>
        ))}
      </div>
      <AddStore addNewStore={addNewStore} />
    </>
  );
};

export default StoreList;
