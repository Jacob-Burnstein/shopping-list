import React from "react";
import TrialMessage from "../../components/header/TrialMessage";
import TrialStoreList from "@/app/components/trial/TrialStoreList";
const TrialStore = () => {
  return (
    <>
      <header>
        <TrialMessage />
        <h1 className="text-center text-xl pt-3 font-medium">Your Stores</h1>
      </header>
      <main>
        <TrialStoreList />
      </main>
    </>
  );
};

export default TrialStore;
