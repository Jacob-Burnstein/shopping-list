import React from "react";
import RegisterLink from "../../components/footerLinks/RegisterLink";
import HomeLink from "../../components/footerLinks/HomeLink";
import LoginForm from "../../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <>
      <header>
        <h1>Log In Page</h1>
      </header>
      <main>
        <LoginForm />
      </main>
      <footer>
        <RegisterLink />
        <HomeLink />
      </footer>
    </>
  );
};

export default LoginPage;
