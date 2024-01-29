import React from "react";
import LoginLink from "./components/footerLinks/LoginLink";
import RegisterLink from "./components/footerLinks/RegisterLink";
import StoreList from "./components/items/ItemList";
import NavBar from "./components/header/NavBar";

export default function Home() {
  return (
    <>
      <main>
        <StoreList />
      </main>
      <footer>
        <LoginLink />
        <RegisterLink />
      </footer>
    </>
  );
}
