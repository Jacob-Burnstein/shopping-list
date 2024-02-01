"use client";

import React, { useState } from "react";
import { ListItem } from "../items/ItemList";

interface TrialListItem {
  ItemName: string;
  Checked: boolean;
}

const TrialItemList = () => {
  const [listItems, setListItems] = useState<TrialListItem[]>([]);
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [itemName, setItemName] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setItemName(e.target.value);
  };

  const handleCheckBoxChange = (item: TrialListItem) => {
    setListItems((prevList) =>
      prevList?.map((prevItem) =>
        prevItem.ItemName === item.ItemName
          ? { ...prevItem, Checked: !item.Checked }
          : prevItem
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (itemName.length > 0) {
      setListItems((prevListItems) => [
        ...prevListItems,
        { ItemName: itemName, Checked: false },
      ]);
    }
    setItemName("");
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!clicked) setClicked(true);
    else {
      handleSubmit(e);
    }
  };

  const handleMouseDown = (itemName: string) => {
    setSelectedName(itemName);
    setTimeout(() => {
      setSelectedName(null);
    }, 5000);
  };

  const handleDelete = (itemName: string) => {
    setListItems((prevListItems) =>
      prevListItems.filter((item) => item.ItemName !== itemName)
    );
  };

  return (
    <>
      <section className="listContainer h-screen">
        {listItems
          ?.sort((a, b) => (a.Checked === b.Checked ? 0 : a.Checked ? 1 : -1))
          .map((item: TrialListItem) => (
            <section key={item.ItemName}>
              <div
                className="listItemCard card"
                onMouseDown={() => handleMouseDown(item.ItemName)}
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
                    {" "}
                    {item.ItemName}
                  </p>
                  {selectedName === item.ItemName && (
                    <button
                      className="deleteButton"
                      onClick={() => handleDelete(item.ItemName)}
                    >
                      -
                    </button>
                  )}
                </div>
              </div>
            </section>
          ))}
      </section>
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

export default TrialItemList;
