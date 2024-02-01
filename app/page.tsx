import React from "react";
import TrialItemList from "./components/home/TrialItemList";

export default function Home() {
  return (
    <>
      <h1 className="text-xl font-semibold pb-2">Home</h1>
      <main>
        <p>
          Create an account to save your lists and create categories. In the
          meantime, create a list here to try it out!
        </p>
        <TrialItemList />
      </main>
    </>
  );
}
