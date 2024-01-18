import React from "react";
import RegisterLink from "../components/footerLinks/RegisterLink";
import HomeLink from "../components/footerLinks/HomeLink";

const LoginPage = () => {
  return (
    <>
      <main>
        <h1>Log In Page</h1>
      </main>
      <footer>
        <RegisterLink />
        <HomeLink />
      </footer>
    </>
  );
};

export default LoginPage;
