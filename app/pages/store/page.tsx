import React from "react";
import HomeLink from "../../components/footerLinks/HomeLink";
import LogOutLink from "../../components/footerLinks/LogOutLink";
import ItemList from "../../components/ItemList";
import AddItem from "../../components/AddItem";

const StorePage = () => {
  return (
    <>
      <main>
        <h1>Store Name</h1>
        <ItemList />
        <AddItem />
      </main>
      <footer>
        <HomeLink /> <LogOutLink />
      </footer>
    </>
  );
};

export default StorePage;
