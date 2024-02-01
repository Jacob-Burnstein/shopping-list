import React from "react";
import TrialItemList from "./components/trial/TrialItemList";

export default function Home() {
  return (
    <>
      <h1 className="text-xl font-semibold pb-2">Home</h1>
      <main>
        <div className="homeIcon">Log In</div>
        <div className="homeIcon">Create Account</div>
        <div className="homeIcon">Try it out</div>
      </main>
    </>
  );
}
