"use client";
import React from "react";
import { useEffect, useState } from "react";

interface ListItem {
  id: number;
  itemname: string;
  checked: boolean;
}
const ItemList = () => {
  const [listItems, setListItems] = useState<ListItem[] | undefined>(undefined);
  const [checked, setChecked] = useState(false);
  console.log(checked);

  const handleCheckBoxChange = () => {
    if (checked === false) {
      const setToChecked = async () => {
        try {
          await fetch("http://localhost:3000/api/list/check", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
          setChecked(true);
        } catch (err) {
          console.error(err);
        }
      };
      setToChecked();
    } else {
      {
        const setToUnchecked = async () => {
          try {
            await fetch("http://localhost:3000/api/list/uncheck", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
            });
            setChecked(false);
          } catch (err) {
            console.error(err);
          }
        };
        setToUnchecked();
      }
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
      {listItems?.map((item: ListItem) => (
        <div key={item.id} className="listItemCard">
          <input
            type="checkbox"
            onChange={() => {
              handleCheckBoxChange();
            }}
          />
          <p>{item.itemname}</p>
        </div>
      ))}{" "}
    </>
  );
};

export default ItemList;
