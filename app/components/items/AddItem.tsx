"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { ListItem } from "./ItemList";
import apiClient from "../../api/utils/apiClient";

interface AddItemProps {
  addNewItem: (newItem: ListItem) => void;
}

const AddItem: React.FC<AddItemProps> = ({ addNewItem }) => {
  const pathname = usePathname();
  const splitPathname = pathname.split("/");
  const storeIdToUse: number = parseInt(
    splitPathname[splitPathname.length - 1]
  );

  const [itemName, setItemName] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setItemName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (itemName.length > 0) {
      const itemToAdd: ListItem = {
        ItemName: itemName,
        UserId: 0,
        StoreId: 0,
        Checked: false,
        Id: 0,
      };
      try {
        console.log("item to add: ", itemToAdd);
        await apiClient.post(`/list/${storeIdToUse}`, itemToAdd);
        const { data } = await apiClient.get(`/list/${storeIdToUse}`);
        const updatedItemDetails = data[data.length - 1];
        addNewItem(updatedItemDetails);
      } catch (err) {
        console.error(err);
      }
    }
    setItemName("");
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!clicked) setClicked(true);
    else {
      handleSubmit(e);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col items-center p-3">
        <button
          type="submit"
          onClick={handleButtonClick}
          className="text-4xl addButton"
        >
          +
        </button>
        <input
          type="text"
          value={itemName || ""}
          className={clicked ? "showInput p-1 m mb-1" : "hideInput"}
          onChange={handleChange}
        />
        {clicked && <p onClick={() => setClicked(false)}>Hide</p>}
      </form>
    </>
  );
};

export default AddItem;
