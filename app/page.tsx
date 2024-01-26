import React from "react";
import LoginLink from "./components/footerLinks/LoginLink";
import RegisterLink from "./components/footerLinks/RegisterLink";
import StoreList from "./components/ItemList";

export default function Home() {
  return (
    <>
      <main>
        <h1>App Title</h1>
        <StoreList />
      </main>
      <footer>
        <LoginLink />
        <RegisterLink />
      </footer>
    </>
  );
}
