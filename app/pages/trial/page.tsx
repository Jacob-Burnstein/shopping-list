import TrialMessage from "@/app/components/header/TrialMessage";
import TrialItemList from "../../components/trial/TrialItemList";
import React from "react";

const TrialPage = () => {
  return (
    <>
      <header>
        <TrialMessage />
      </header>
      <main>
        <TrialItemList />
      </main>
    </>
  );
};

export default TrialPage;
