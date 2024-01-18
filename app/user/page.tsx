import React from "react";
import LogOutLink from "../components/footerLinks/LogOutLink";
import StoreList from "../components/StoreList";

const UserPage = () => {
  return (
    <>
      <main>
        <h1>Username</h1>
      </main>
      <StoreList />
      <footer>
        <LogOutLink />
      </footer>
    </>
  );
};

export default UserPage;
