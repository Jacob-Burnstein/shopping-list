"use client";

import React, { useState } from "react";

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

  const handleDelete = (itemName: string) => {
    setListItems((prevListItems) =>
      prevListItems.filter((item) => item.ItemName !== itemName)
    );
  };

  return (
    <>
      <section className="listContainer">
        {listItems.length < 1 && (
          <p className="text-center text-xl">Add items here!</p>
        )}
        {listItems
          ?.sort((a, b) => (a.Checked === b.Checked ? 0 : a.Checked ? 1 : -1))
          .map((item: TrialListItem) => (
            <section key={item.ItemName}>
              <div
                className="listItemCard card"
                onMouseEnter={() => handleMouseEnter(item.ItemName)}
                onMouseLeave={() => handleMouseLeave(item.ItemName)}
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
        <input
          type="text"
          value={itemName || ""}
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
