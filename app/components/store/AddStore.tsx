import React, { useState } from "react";
import { Store } from "./StoreList";
import apiClient from "../../api/utils/apiClient";

interface AddStoreProps {
  addNewStore: (newStore: Store) => void;
}

const AddStore: React.FC<AddStoreProps> = ({ addNewStore }) => {
  const [storeName, setStoreName] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setStoreName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (storeName.length > 0) {
      const storeToAdd: Store = {
        StoreName: storeName,
        UserId: 0,
        Id: 0,
      };
      addNewStore(storeToAdd);
      try {
        await apiClient.post("/users/store", storeToAdd);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col items-center p-3">
        <button
          type="submit"
          onClick={() => setClicked(true)}
          className="text-4xl addButton"
        >
          +
        </button>
        <input
          type="text"
          value={storeName || ""}
          onChange={handleChange}
          className={clicked ? "showInput p-1 m mb-1" : "hideInput"}
        />
        {clicked && <p onClick={() => setClicked(false)}>Hide</p>}
      </form>
    </>
  );
};

export default AddStore;
