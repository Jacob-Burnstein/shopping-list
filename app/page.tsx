import React from "react";
import LoginButton from "./components/homePageButtons/LoginButton";
import RegisterButton from "./components/homePageButtons/RegisterButton";

export default function Home() {
  return (
    <main>
      <h1>Shopping List</h1>
      <LoginButton />
      <RegisterButton />
    </main>
  );
}
