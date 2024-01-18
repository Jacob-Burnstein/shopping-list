import React from "react";
import HomeLink from "../components/footerLinks/HomeLink";
import LogOutLink from "../components/footerLinks/LogOutLink";
import ItemList from "../components/ItemList";

const StorePage = () => {
  return (
    <>
      <main>
        <h1>Store Name</h1>
        <ItemList />
      </main>
      <footer>
        <HomeLink /> <LogOutLink />
      </footer>
    </>
  );
};

export default StorePage;
