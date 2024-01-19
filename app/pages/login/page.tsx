import React from "react";
import RegisterLink from "../../components/footerLinks/RegisterLink";
import HomeLink from "../../components/footerLinks/HomeLink";

const LoginPage = () => {
  return (
    <>
      <main>
        <h1>Log In Page</h1>
        <h2>Form here (create another component)</h2>
      </main>
      <footer>
        <RegisterLink />
        <HomeLink />
      </footer>
    </>
  );
};

export default LoginPage;
