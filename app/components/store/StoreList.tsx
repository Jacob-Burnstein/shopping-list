"use client";

import React, { useEffect, useState } from "react";
import AddStore from "./AddStore";
import DeleteStore from "./DeleteStoreButton";
import apiClient from "../../api/utils/apiClient";
import Link from "next/link";

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
        const response = await apiClient.get("/users/stores");
        setStores(response.data);
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
            <Link href={`/pages/${store.Id}`}>{store.StoreName}</Link>
            <DeleteStore id={store.Id} deleteStore={deleteStore} />
          </section>
        ))}
      </div>
      <AddStore addNewStore={addNewStore} />
    </>
  );
};

export default StoreList;
