"use client";
import React from "react";
import { useEffect, useState } from "react";

interface ListItem {
  id: number;
  itemname: string;
  checked: boolean;
  storeId: number;
  userId: number;
}
const ItemList = () => {
  const [listItems, setListItems] = useState<ListItem[] | undefined>(undefined);

  const handleCheckBoxChange = (item: ListItem) => {
    if (item.checked === false) {
      const setToChecked = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/list/check", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
          });
          if (response.status === 200) {
            setListItems((prevList) =>
              prevList?.map((prevItem) =>
                prevItem.id === item.id
                  ? { ...prevItem, checked: !item.checked }
                  : prevItem
              )
            );
            console.log("List Items: ", listItems);
          }
        } catch (err) {
          console.error(err);
        }
      };
      setToChecked();
    } else {
      const setToUnchecked = async () => {
        try {
          const response = await fetch(
            "http://localhost:3000/api/list/uncheck",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(item),
            }
          );
          if (response.status === 200) {
            setListItems((prevList) =>
              prevList?.map((prevItem) =>
                prevItem.id === item.id
                  ? { ...prevItem, checked: !item.checked }
                  : prevItem
              )
            );
            console.log("List Items: ", listItems);
          }
        } catch (err) {
          console.error(err);
        }
      };
      setToUnchecked();
    }
  };

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
      {listItems?.map((item: ListItem) =>
        !item.checked ? (
          <div key={item.id} className="listItemCard">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => {
                handleCheckBoxChange(item);
              }}
            />
            <p>{item.itemname}</p>
          </div>
        ) : null
      )}
      {listItems?.map((item: ListItem) =>
        item.checked ? (
          <div key={item.id} className="listItemCard">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => {
                handleCheckBoxChange(item);
              }}
            />
            <p>{item.itemname}</p>
          </div>
        ) : null
      )}
    </>
  );
};

export default ItemList;
