import React from "react";
import LoginButton from "../components/footerLinks/LoginLink";
import HomeButton from "../components/footerLinks/HomeLink";

const RegisterPage = () => {
  return (
    <>
      <main>
        <h1>Create Account</h1>
      </main>
      <footer>
        <LoginButton />
        <HomeButton />
      </footer>
    </>
  );
};

export default RegisterPage;
