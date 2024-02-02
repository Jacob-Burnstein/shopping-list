"use client";

import React, { useState } from "react";
import getStoreInitials from "../../utils/getStoreInitials";
import determineStoreColor from "../../utils/determineStoreColor";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface TrialStore {
  StoreName: string;
}

const TrialStoreList = () => {
  const [stores, setStores] = useState<TrialStore[]>([]);
  const [selectedStore, setSelectedStore] = useState<string | null>(null);
  const [storeName, setStoreName] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setStoreName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (storeName.length > 0) {
      setStores((prevStores) => [...prevStores, { StoreName: storeName }]);
    }
    setStoreName("");
  };

  const handleDelete = (storeName: string) => {
    setStores((prevList) =>
      prevList?.filter((store) => storeName != store.StoreName)
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
      <section className="listContainer">
        <div>
          {stores?.map((store: TrialStore, index: number) => (
            <section
              key={store.StoreName}
              className="storeCard card"
              onMouseEnter={() => handleMouseEnter(store.StoreName)}
              onMouseLeave={() => handleMouseLeave(store.StoreName)}
            >
              <div className={`${determineStoreColor(index)} icon`}>
                {getStoreInitials(store.StoreName)}
              </div>
              <div className="nameAndDelete">
                <Link
                  href={`/pages/trialList`}
                  className="font-semibold text-lg "
                >
                  {store.StoreName}
                </Link>
                {selectedStore === store.StoreName && (
                  <button
                    className="deleteButton"
                    onClick={() => handleDelete(store.StoreName)}
                  >
                    -
                  </button>
                )}
              </div>
            </section>
          ))}
        </div>
      </section>
      <form onSubmit={handleSubmit} className="flex flex-col items-center p-3">
        <input
          type="text"
          value={storeName || ""}
          className={clicked ? "showInput p-1 m mb-1" : "hideInput"}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="text-4xl addButton"
          onClick={() => (clicked ? setClicked(false) : setClicked(true))}
        >
          {!clicked ? "+" : "-"}
        </button>
      </form>
    </>
  );
};

export default TrialStoreList;
