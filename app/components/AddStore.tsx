import React, { useState } from "react";
import { Store } from "./StoreList";
import apiClient from "../api/utils/apiClient";

interface AddStoreProps {
  addNewStore: (newStore: Store) => void;
}

const AddStore: React.FC<AddStoreProps> = ({ addNewStore }) => {
  const [storeName, setStoreName] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setStoreName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Add Store:</label>
        <input type="text" value={storeName || ""} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddStore;
