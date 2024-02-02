import TrialMessage from "@/app/components/header/TrialMessage";
import TrialItemList from "../../components/trial/TrialItemList";
import React from "react";

const TrialPage = () => {
  return (
    <>
      <header>
        <TrialMessage />
        <h1 className="text-center text-xl pt-3 font-medium">Your List</h1>
      </header>
      <main>
        <TrialItemList />
      </main>
    </>
  );
};

export default TrialPage;
