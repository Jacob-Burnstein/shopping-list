"use client";

import React, { useEffect, useState } from "react";
import AddStore from "./AddStore";
import DeleteStore from "./DeleteStoreButton";
import apiClient from "../../api/utils/apiClient";
import Link from "next/link";
import getStoreInitials from "../../utils/getStoreInitials";
import determineStoreColor from "../../utils/determineStoreColor";
import { getToken } from "../../utils/tokenStorage";

export interface Store {
  Id: number;
  StoreName: string;
  UserId: number;
}

const StoreList = () => {
  const [stores, setStores] = useState<Store[] | undefined>(undefined);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const addNewStore = (newStore: Store) => {
    setStores((prevStores) => [...(prevStores || []), newStore]);
  };

  const deleteStore = (storeId: number) => {
    setStores((prevList) => prevList?.filter((store) => storeId != store.Id));
  };

  useEffect(() => {
    const getStores = async () => {
      try {
        const response = await apiClient.get("/stores");
        setStores(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getStores();
  }, []);

  const handleMouseEnter = (itemId: number) => {
    setTimeout(() => {
      setSelectedId(itemId);
    }, 100);
  };
  const handleMouseLeave = (itemId: number) => {
    setTimeout(() => {
      setSelectedId(null);
    }, 100);
  };

  return (
    <>
      <section className="listContainer">
        <div>
          {stores?.map((store: Store, index: number) => (
            <section
              key={store.Id}
              className="storeCard card"
              onMouseEnter={() => handleMouseEnter(store.Id)}
              onMouseLeave={() => handleMouseLeave(store.Id)}
            >
              <div className={`${determineStoreColor(index)} icon`}>
                {getStoreInitials(store.StoreName)}
              </div>
              <div className="nameAndDelete">
                <Link
                  href={`/pages/store/${store.Id}`}
                  className="font-semibold text-lg "
                  // onClick={() => handleClick(store.Id)}
                >
                  {store.StoreName}
                </Link>
                {selectedId === store.Id && (
                  <DeleteStore id={store.Id} deleteStore={deleteStore} />
                )}
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
