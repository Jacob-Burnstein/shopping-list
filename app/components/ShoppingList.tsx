"use client";
import React from "react";
import { useEffect, useState } from "react";

interface ListItem {
  id: number;
  itemname: string;
  checked: boolean;
}
const ShoppingList = () => {
  const [listItems, setListItems] = useState<ListItem[] | undefined>(undefined);
  useEffect(() => {
    const getList = async () => {
      try {
        const query = await fetch("http://localhost:3000/api/list");
        const response = await query.json();
        setListItems(response);
      } catch (err) {
        console.error(err);
      }
    };
    getList();
  }, []);

  return (
    <>
      {listItems?.map((item: ListItem) => (
        <div key={item.id} className="listItemCard">
          <input type="checkbox" />
          <p>{item.itemname}</p>
        </div>
      ))}{" "}
    </>
  );
};

export default ShoppingList;
