"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { ListItem } from "./ItemList";
import apiClient from "../api/utils/apiClient";

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
        await apiClient.post(`/list/${storeIdToUse}`, itemToAdd);
        const { data } = await apiClient.get(`/list/${storeIdToUse}`);
        const updatedItemDetails = data[data.length - 1];
        addNewItem(updatedItemDetails);
        console.log(updatedItemDetails);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Add Item:</label>
        <input type="text" value={itemName || ""} onChange={handleChange} />
      </form>
    </>
  );
};

export default AddItem;
