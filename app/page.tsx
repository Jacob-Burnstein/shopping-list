import React from "react";
import LoginLink from "./components/footerLinks/LoginLink";
import RegisterLink from "./components/footerLinks/RegisterLink";
import ShoppingList from "./components/ShoppingList";

export default function Home() {
  return (
    <>
      <main>
        <h1>App Title</h1>
        <ShoppingList />
      </main>
      <footer>
        <LoginLink />
        <RegisterLink />
      </footer>
    </>
  );
}
