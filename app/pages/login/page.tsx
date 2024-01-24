import React from "react";
import RegisterLink from "../../components/footerLinks/RegisterLink";
import HomeLink from "../../components/footerLinks/HomeLink";
import LoginForm from "@/app/components/LoginForm";

const LoginPage = () => {
  return (
    <>
      <main>
        <h1>Log In Page</h1>
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
