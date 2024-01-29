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

  const getStoreInitials = (store: string) => {
    const initials: string[] = [];
    const splitArray = store.split(" ");
    for (const word of splitArray) {
      const characters = word.split("");
      initials.push(characters[0]);
    }
    return initials.join("");
  };

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
      <section className="listContainer h-screen">
        <div>
          {stores?.map((store: Store) => (
            <section key={store.Id} className="storeCard card">
              <div className="icon">{getStoreInitials(store.StoreName)}</div>
              <div className="nameAndDelete">
                <Link
                  href={`/pages/store/${store.Id}`}
                  className="font-semibold text-lg "
                >
                  {store.StoreName}
                </Link>
                <DeleteStore id={store.Id} deleteStore={deleteStore} />
              </div>
            </section>
          ))}
        </div>
        <AddStore addNewStore={addNewStore} />
      </section>
    </>
  );
};

export default StoreList;
