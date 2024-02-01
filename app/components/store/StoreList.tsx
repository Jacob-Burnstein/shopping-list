"use client";

import React, { useEffect, useState } from "react";
import AddStore from "./AddStore";
import DeleteStore from "./DeleteStoreButton";
// import apiClient from "../../api/utils/apiClient";
import createAuthenticatedApiClient from "../../api/utils/authenticatedApiClient";
import { useAuth } from "../../contexts/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface Store {
  Id: number;
  StoreName: string;
  UserId: number;
}

const StoreList = () => {
  const router = useRouter();
  const authContext = useAuth();
  const { token } = useAuth();
  console.log("token frmo stores:", token);
  const apiClient = createAuthenticatedApiClient(authContext);
  const [stores, setStores] = useState<Store[] | undefined>(undefined);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const getStoreInitials = (store: string) => {
    const initials: string[] = [];
    const splitArray = store.split(" ");
    for (const word of splitArray) {
      const characters = word.split("");
      initials.push(characters[0]);
    }
    return initials.join("");
  };

  const determineStoreColor = (index: number): string => {
    let color: string | null = "";
    let num: number = index + 1;
    if (num % 4 === 0) color = "greyBlue";
    else if (num % 3 === 0) color = "darkGrey";
    else if (num % 2 === 0) color = "yellow";
    else color = "green";
    return color;
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
        const response = await apiClient.get("/stores");
        setStores(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getStores();
  }, []);

  const handleMouseDown = (itemId: number) => {
    setSelectedId(itemId);
    setTimeout(() => {
      setSelectedId(null);
    }, 5000);
  };

  const handleClick = (id: number) => {
    router.push(`/pages/store/${id}`);
  };

  return (
    <>
      <section className="listContainer h-screen">
        <div>
          {stores?.map((store: Store, index: number) => (
            <section
              key={store.Id}
              className="storeCard card"
              onMouseDown={() => handleMouseDown(store.Id)}
              onClick={() => handleClick(store.Id)}
            >
              <div className={`${determineStoreColor(index)} icon`}>
                {getStoreInitials(store.StoreName)}
              </div>
              <div className="nameAndDelete">
                <Link
                  href={`/pages/store/${store.Id}`}
                  className="font-semibold text-lg "
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
