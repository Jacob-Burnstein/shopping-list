"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DeleteButton from "./DeleteItemButton";
import AddItem from "./AddItem";
import apiClient from "../../api/utils/apiClient";
import "../../globals.css";

export interface ListItem {
  Id: number;
  ItemName: string;
  Checked: boolean;
  StoreId: number;
  UserId: number;
}
const ItemList = () => {
  const pathname = usePathname();
  const splitPathname = pathname.split("/");
  const storeIdToUse: number = parseInt(
    splitPathname[splitPathname.length - 1]
  );

  const [listItems, setListItems] = useState<ListItem[] | undefined>(undefined);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [mouseHeld, setMouseHeld] = useState(false);

  const handleCheckBoxChange = async (item: ListItem) => {
    try {
      const response = await apiClient.post("/list/check", item);
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

  const addNewItem = async (newItem: ListItem) => {
    // const repsonse = await apiClient.post("/list", newItem);
    setListItems((prevList) => [newItem, ...(prevList || [])]);
  };

  const deleteItem = (itemId: number) => {
    setListItems((prevList) => prevList?.filter((item) => itemId !== item.Id));
  };

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await apiClient.get(`/list/${storeIdToUse}`);
        setListItems(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getList();
  }, []);

  const handleMouseDown = (itemId: number) => {
    setSelectedId(itemId);
    setTimeout(() => {
      setSelectedId(null);
    }, 5000);
  };

  return (
    <>
      <section className="listContainer h-screen">
        {Array.isArray(listItems) &&
          listItems
            .sort((a, b) => (a.Checked === b.Checked ? 0 : a.Checked ? 1 : -1))
            .map((item: ListItem) => (
              <section key={item.Id}>
                <div
                  className="listItemCard card"
                  onMouseDown={() => handleMouseDown(item.Id)}
                >
                  <label className="checkboxContainer">
                    <input
                      type="checkbox"
                      checked={item.Checked}
                      onChange={() => {
                        handleCheckBoxChange(item);
                      }}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <div className="itemAndDelete">
                    <p
                      onClick={() => {
                        handleCheckBoxChange(item);
                      }}
                      className={
                        item.Checked ? "checkedItem itemName" : "itemName"
                      }
                    >
                      {item.ItemName}
                    </p>
                    {selectedId === item.Id && (
                      <DeleteButton id={item.Id} deleteItem={deleteItem} />
                    )}
                  </div>
                </div>
              </section>
            ))}
        <AddItem addNewItem={addNewItem} />
      </section>
    </>
  );
};

export default ItemList;
