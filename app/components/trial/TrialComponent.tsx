"use client";

import React, { useState } from "react";
import TrialItemList from "./subcomponents/TrialItemList";
import TrialStoreList from "./subcomponents/TrialStoreList";

export interface Item {
  itemName: string;
  checked: boolean;
}

const TrialComponent: React.FC = () => {
  const [pageToView, setPageToView] = useState<boolean>(true);
  const [stores, setStores] = useState<string[]>([]);
  const [items, setItems] = useState<Item[]>([]);

  return (
    <div>
      {pageToView ? (
        <TrialStoreList
          stores={stores}
          setStores={setStores}
          setPageToView={setPageToView}
        />
      ) : (
        <TrialItemList
          items={items}
          setItems={setItems}
          setPageToView={setPageToView}
        />
      )}
    </div>
  );
};

export default TrialComponent;
