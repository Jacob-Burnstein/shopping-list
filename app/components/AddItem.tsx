"use client";

import React, { useState } from "react";

interface NewItem {
  ItemName: string;
  UserId: number;
  StoreId: number;
}

const AddItem = () => {
  const [itemName, setItemName] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setItemName(e.target.value);
  };

  const handleSubmit = async () => {
    console.log("submit");
    const itemToAdd: NewItem = { ItemName: itemName, UserId: 1, StoreId: 1 };
    console.log("item to add: ", itemToAdd);
    console.log("item name: ", itemName);

    try {
      const response = await fetch("http://localhost:3000/api/list/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemToAdd),
      });
      // Add action here
    } catch (err) {
      console.error(err);
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
