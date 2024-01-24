"use client";

import React, { useState } from "react";
import { ListItem } from "./ItemList";

interface AddItemProps {
  addNewItem: (newItem: ListItem) => void;
}

const AddItem: React.FC<AddItemProps> = ({ addNewItem }) => {
  const [itemName, setItemName] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setItemName(e.target.value);
  };

  const handleSubmit = async () => {
    const itemToAdd: ListItem = {
      ItemName: itemName,
      UserId: 1,
      StoreId: 1,
      Checked: false,
      Id: 0,
    };

    addNewItem(itemToAdd);
    try {
      await fetch("http://localhost:3000/api/list/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemToAdd),
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form onSubmit={() => handleSubmit()}>
        <label>Add Item:</label>
        <input type="text" value={itemName || ""} onChange={handleChange} />
      </form>
    </>
  );
};

export default AddItem;
