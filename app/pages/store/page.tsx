import React from "react";
import HomeLink from "../../components/footerLinks/HomeLink";
import LogOutLink from "../../components/footerLinks/LogOutLink";
import ShoppingList from "../../components/ShoppingList";

const StorePage = () => {
  return (
    <>
      <main>
        <h1>Store Name</h1>
        <ShoppingList />
      </main>
      <footer>
        <HomeLink /> <LogOutLink />
      </footer>
    </>
  );
};

export default StorePage;
