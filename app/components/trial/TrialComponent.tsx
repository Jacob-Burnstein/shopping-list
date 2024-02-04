"use client";

import React, { useState } from "react";
import TrialItemList from "./subcomponents/TrialItemList";
import TrialStoreList from "./subcomponents/TrialStoreList";

export interface Item {
  itemName: string;
  checked: boolean;
  storeName: string;
}

const TrialComponent: React.FC = () => {
  const [pageToView, setPageToView] = useState<boolean>(true);
  const [stores, setStores] = useState<string[]>([]);
  const [storeToView, setStoreToView] = useState<string>("");
  const [items, setItems] = useState<Item[]>([]);

  return (
    <div>
      {pageToView ? (
        <TrialStoreList
          stores={stores}
          setStores={setStores}
          setStoreToView={setStoreToView}
          setPageToView={setPageToView}
        />
      ) : (
        <TrialItemList
          // item={item}
          items={items}
          setItems={setItems}
          storeToView={storeToView}
          setPageToView={setPageToView}
        />
      )}
    </div>
  );
};

export default TrialComponent;
