"use client";

import React, { useState } from "react";
import getStoreInitials from "../../../utils/getStoreInitials";
import determineStoreColor from "../../../utils/determineStoreColor";
import Link from "next/link";

interface TrialStoreProps {
  stores: string[];
  setStores: React.Dispatch<React.SetStateAction<string[]>>;
  setPageToView: React.Dispatch<React.SetStateAction<boolean>>;
}

const TrialStoreList: React.FC<TrialStoreProps> = ({
  stores,
  setStores,
  setPageToView,
}) => {
  const [selectedStore, setSelectedStore] = useState<string | null>(null);
  const [storeName, setStoreName] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);

  console.log("stores from store page: ", stores);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setStoreName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submitting: ", storeName);
    if (storeName.length > 0) {
      setStores((prevStores) => [...prevStores, storeName]);
    }
    setStoreName("");
  };

  const handleDelete = (store: string) => {
    setStores((prevList) =>
      prevList?.filter((singleStore) => singleStore != store)
    );
  };

  const handleMouseEnter = (storeName: string) => {
    setTimeout(() => {
      setSelectedStore(storeName);
    }, 100);
  };
  const handleMouseLeave = (storeName: string) => {
    setTimeout(() => {
      setSelectedStore(null);
    }, 100);
  };

  return (
    <>
      <h1 className="text-center">Your Stores</h1>
      {stores.length < 1 ? (
        <p>
          Click the "+" button to add a store, and then click the store to
          create a shopping list!
        </p>
      ) : (
        <section className="listContainer">
          <div>
            {stores?.map((store, index: number) => (
              <section
                key={store}
                className="storeCard card"
                onMouseEnter={() => handleMouseEnter(store)}
                onMouseLeave={() => handleMouseLeave(store)}
              >
                <div className={`${determineStoreColor(index)} icon`}>
                  {getStoreInitials(store)}
                </div>
                <div className="nameAndDelete">
                  <p
                    className="font-semibold text-lg "
                    onClick={() => setPageToView(!false)}
                  >
                    {store}
                  </p>
                  {selectedStore === store && (
                    <button
                      className="deleteButton"
                      onClick={() => handleDelete(store)}
                    >
                      -
                    </button>
                  )}
                </div>
              </section>
            ))}
          </div>
        </section>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col items-center p-3">
        <input
          type="text"
          value={storeName || ""}
          className={clicked ? "showInput p-1 m mb-1" : "hideInput"}
          onChange={handleChange}
        />

        <button
          type="submit"
          className={clicked ? "text-base hover:text-lg" : "text-4xl addButton"}
          onClick={() => (clicked ? setClicked(false) : setClicked(true))}
        >
          {!clicked ? "+" : "Add"}
        </button>
      </form>
    </>
  );
};

export default TrialStoreList;
