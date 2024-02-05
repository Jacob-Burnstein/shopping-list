import React from "react";
import ItemList from "../../../components/items/ItemList";
import getTokenInfo from "../../../utils/getTokenInfo";

const StorePage = () => {
  const tokenInfo = getTokenInfo();

  return (
    <>
      <main>
        {tokenInfo ? (
          <ItemList />
        ) : (
          <p>You must be logged in to view this page.</p>
        )}
      </main>
    </>
  );
};

export default StorePage;
