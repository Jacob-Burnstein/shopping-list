import React from "react";
import LoginLink from "./components/footerLinks/LoginLink";
import RegisterLink from "./components/footerLinks/RegisterLink";
import StoreList from "./components/items/ItemList";

export default function Home() {
  return (
    <>
      <header>
        <h1>App Title</h1>
      </header>
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
