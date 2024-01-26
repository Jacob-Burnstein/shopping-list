import React from "react";
import HomeLink from "../../../components/footerLinks/HomeLink";
import LogOutLink from "../../../components/footerLinks/LogOutLink";
import ItemList from "../../../components/items/ItemList";
import StorePageHeader from "../../../components/header/StorePageHeader";

const StorePage = () => {
  return (
    <>
      {" "}
      <header>
        <StorePageHeader />
      </header>
      <main>
        <ItemList />
      </main>
      <footer>
        <HomeLink /> <LogOutLink />
      </footer>
    </>
  );
};

export default StorePage;
