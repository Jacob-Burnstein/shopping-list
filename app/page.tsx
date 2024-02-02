import React from "react";
import TrialItemList from "./components/trial/TrialItemList";

export default function Home() {
  return (
    <>
      <h1 className="text-xl font-semibold pb-2">Home</h1>
      <main>
        <div className="homeIcon green">
          <p className="text-2xl text-center">Log In</p>
        </div>
        <div className="homeIcon greyBlue">
          <p className="text-2xl text-center">Create Account</p>
        </div>
        <div className="homeIcon darkGrey">
          <p className="text-2xl bg-dce4e7 ">Try</p>
        </div>
      </main>
    </>
  );
}
