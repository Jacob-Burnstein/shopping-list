"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { ListItem } from "./ItemList";
import apiClient from "../../api/utils/apiClient";

import getIdFromUrl from "../../utils/getIdFromUrl";

interface AddItemProps {
  addNewItem: (newItem: ListItem) => void;
}

const AddItem: React.FC<AddItemProps> = ({ addNewItem }) => {
  const pathname = usePathname();
  const storeIdToUse = getIdFromUrl(pathname);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [itemName, setItemName] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setItemName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (itemName.length > 0) {
      setIsLoading(true);
      try {
        await apiClient.post(`/items/${storeIdToUse}`, { itemName });
        const { data } = await apiClient.get(`/items/${storeIdToUse}`);
        const updatedItemDetails = data[data.length - 1];
        addNewItem(updatedItemDetails);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
        setItemName("");
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col items-center p-3">
        <input
          type="text"
          maxLength={50}
          value={itemName || ""}
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
        {isLoading && <p className="loadingMessage">Adding...</p>}
      </form>
    </>
  );
};

export default AddItem;
