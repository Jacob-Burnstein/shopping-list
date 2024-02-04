import React, { useState } from "react";
import { Store } from "./StoreList";
import createAuthenticatedApiClient from "../../api/utils/authenticatedApiClient";
import { useAuth } from "../../contexts/AuthContext";

interface AddStoreProps {
  addNewStore: (newStore: Store) => void;
}

const AddStore: React.FC<AddStoreProps> = ({ addNewStore }) => {
  const authContext = useAuth();
  const apiClient = createAuthenticatedApiClient(authContext);
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
        await apiClient.post("/stores", { storeName: storeToAdd.StoreName });
      } catch (err) {
        console.error(err);
      }
    }
    setStoreName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col items-center p-3">
        {" "}
        <input
          type="text"
          value={storeName || ""}
          onChange={handleChange}
          className={clicked ? "showInput p-1 m mb-1" : "hideInput"}
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

export default AddStore;
