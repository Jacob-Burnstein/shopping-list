import React from "react";
import ItemList from "../../../components/items/ItemList";

const StorePage = () => {
  return (
    <>
      <h1 className="text-xl font-semibold pb-2">List</h1>
      <main>
        <ItemList />
      </main>
    </>
  );
};

export default StorePage;
