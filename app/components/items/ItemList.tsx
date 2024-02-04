"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DeleteButton from "./DeleteItemButton";
import AddItem from "./AddItem";
import apiClient from "../../api/utils/apiClient";
import getIdFromUrl from "../../utils/getIdFromUrl";
import "../../globals.css";

export interface ListItem {
  Id: number;
  ItemName: string;
  Checked: boolean;
  StoreId: number;
  UserId: number;
}
const ItemList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>("");

  const pathname = usePathname();
  const storeIdToUse = getIdFromUrl(pathname);

  const [listItems, setListItems] = useState<ListItem[] | undefined>(undefined);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [storeName, setStoreName] = useState<string>();

  const handleCheckBoxChange = async (item: ListItem) => {
    try {
      const response = await apiClient.post("/items/check", item);
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
    setListItems((prevList) => [newItem, ...(prevList || [])]);
  };

  const deleteItem = (itemId: number) => {
    setListItems((prevList) => prevList?.filter((item) => itemId !== item.Id));
  };

  useEffect(() => {
    const getList = async () => {
      try {
        setIsLoading(true);
        const itemsResponse = await apiClient.get(`/items/${storeIdToUse}`);
        setListItems(itemsResponse.data);

        const storeResponse = await apiClient.get(`stores/${storeIdToUse}`);
        const storeName = storeResponse.data.StoreName;
        setStoreName(storeName);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    getList();
  }, []);

  const handleMouseEnter = (itemId: number) => {
    setTimeout(() => {
      setSelectedId(itemId);
    }, 100);
  };
  const handleMouseLeave = (itemId: number) => {
    setTimeout(() => {
      setSelectedId(null);
    }, 100);
  };

  return (
    <>
      {isLoading && <p className="loadingMessage">Gathering your list...</p>}
      <h1 className="text-xl text-center font-semibold pb-2">{storeName}</h1>
      <section className="listContainer h-screen">
        {Array.isArray(listItems) &&
          listItems
            .sort((a, b) => (a.Checked === b.Checked ? 0 : a.Checked ? 1 : -1))
            .map((item: ListItem) => (
              <section key={item.Id}>
                <div
                  className="listItemCard card"
                  onMouseEnter={() => handleMouseEnter(item.Id)}
                  onMouseLeave={() => handleMouseLeave(item.Id)}
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
                  <div className="nameAndDelete">
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
