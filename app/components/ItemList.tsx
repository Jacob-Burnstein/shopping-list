"use client";
import React from "react";
import { useEffect, useState } from "react";
import DeleteButton from "./DeleteButton";

interface ListItem {
  Id: number;
  ItemName: string;
  Checked: boolean;
  StoreId: number;
  UserId: number;
}
const ItemList = () => {
  const [listItems, setListItems] = useState<ListItem[] | undefined>(undefined);

  const handleCheckBoxChange = (item: ListItem) => {
    const setChecked = async () => {
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
              prevItem.Id === item.Id
                ? { ...prevItem, Checked: !item.Checked }
                : prevItem
            )
          );
        }
      } catch (err) {
        console.error(err);
      }
    };
    setChecked();
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
        !item.Checked ? (
          <section key={item.Id}>
            <div className="listItemCard">
              <input
                type="checkbox"
                checked={item.Checked}
                onChange={() => {
                  handleCheckBoxChange(item);
                }}
              />
              <p>{item.ItemName}</p>
              <DeleteButton id={item.Id} />
            </div>
          </section>
        ) : null
      )}
      {listItems?.map((item: ListItem) =>
        item.Checked ? (
          <section key={item.Id}>
            <div className="listItemCard">
              <input
                type="checkbox"
                checked={item.Checked}
                onChange={() => {
                  handleCheckBoxChange(item);
                }}
              />
              <p>{item.ItemName}</p>
              <DeleteButton id={item.Id} />
            </div>
          </section>
        ) : null
      )}
    </>
  );
};

export default ItemList;
