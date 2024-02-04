"use client";

import React, { useState } from "react";
import { Item } from "../TrialComponent";

interface TrialListProps {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  storeToView: string;
  setPageToView: React.Dispatch<React.SetStateAction<boolean>>;
}

const TrialItemList: React.FC<TrialListProps> = ({
  items,
  setItems,
  storeToView,
  setPageToView,
}) => {
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);

  const listToView = items.filter((item) => item.storeName === storeToView);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleCheckBoxChange = (item: Item) => {
    setItems((prevItems) =>
      prevItems?.map((prevItem) =>
        prevItem.itemName === item.itemName
          ? { ...prevItem, checked: !item.checked }
          : prevItem
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.length > 0) {
      setItems((prevItems) => [
        ...prevItems,
        { itemName: name, checked: false, storeName: storeToView },
      ]);
    }
    setName("");
  };

  const handleMouseEnter = (itemName: string) => {
    setTimeout(() => {
      setSelectedName(itemName);
    }, 100);
  };
  const handleMouseLeave = (itemName: string) => {
    setTimeout(() => {
      setSelectedName(null);
    }, 100);
  };

  const handleDelete = (name: string) => {
    setItems((prevListItems) =>
      prevListItems.filter((item) => item.itemName !== name)
    );
  };

  return (
    <>
      <p className="text-center">Click "{storeToView}" to go back </p>
      <h1
        className="text-xl text-center font-semibold pb-2 cursor-pointer"
        onClick={() => setPageToView(true)}
      >
        {storeToView}
      </h1>
      <section className="listContainer">
        {listToView.length < 1 && (
          <p className="text-center text-xl">Add items here.</p>
        )}
        {listToView
          ?.sort((a, b) => (a.checked === b.checked ? 0 : a.checked ? 1 : -1))
          .map((item: Item) => (
            <section key={item.itemName}>
              <div
                className="listItemCard card"
                onMouseEnter={() => handleMouseEnter(item.itemName)}
                onMouseLeave={() => handleMouseLeave(item.itemName)}
              >
                <label className="checkboxContainer">
                  <input
                    type="checkbox"
                    checked={item.checked}
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
                      item.checked
                        ? "checkedItem itemName cursor-pointer"
                        : "itemName cursor-pointer"
                    }
                  >
                    {item.itemName}
                  </p>
                  {selectedName === item.itemName && (
                    <button
                      className="deleteButton"
                      onClick={() => handleDelete(item.itemName)}
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
        <input
          type="text"
          value={name || ""}
          className={clicked ? "showInput p-1 m mb-1" : "hideInput"}
          onChange={handleChange}
        />
        <button
          type="submit"
          className={clicked ? "text-base hover:text-lg" : "text-4xl addButton"}
          onClick={() => (clicked ? setClicked(false) : setClicked(true))}
        >
          {!clicked ? "+" : "Add"}
        </button>
      </form>
    </>
  );
};

export default TrialItemList;
