"use client";

import React, { useEffect, useState } from "react";
import AddStore from "./AddStore";
import DeleteStore from "./DeleteStoreButton";
import apiClient from "../../api/utils/apiClient";
import Link from "next/link";
import getStoreInitials from "../../utils/getStoreInitials";
import determineStoreColor from "../../utils/determineStoreColor";

export interface Store {
  Id: number;
  StoreName: string;
  UserId: number;
}

const StoreList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [stores, setStores] = useState<Store[]>([]);
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
        setIsLoading(true);
        const response = await apiClient.get("/stores");
        setStores(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
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
      {isLoading && <p className="loadingMessage">Gathering your stores...</p>}

      <section className="listContainer">
        {" "}
        {stores && stores.length < 1 && (
          <p className="text-center text-lg">
            Click the "+" button to add a store, and then click the store to
            create a shopping list.
          </p>
        )}
        <div>
          {stores.map((store: Store, index: number) => (
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
