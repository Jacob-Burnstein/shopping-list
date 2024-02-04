import TrialMessage from "@/app/components/header/TrialMessage";
import React from "react";
import TrialComponent from "../../components/trial/TrialComponent";

const TrialPage = () => {
  return (
    <>
      <header>
        <TrialMessage />
      </header>
      <main>
        <TrialComponent />
      </main>
    </>
  );
};

export default TrialPage;
