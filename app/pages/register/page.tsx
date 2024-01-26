import React from "react";
import LoginButton from "../../components/footerLinks/LoginLink";
import HomeButton from "../../components/footerLinks/HomeLink";
import RegisterForm from "../../components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <header>
        <h1>Create Account</h1>
      </header>
      <main>
        <RegisterForm />
      </main>
      <footer>
        <LoginButton />
        <HomeButton />
      </footer>
    </>
  );
};

export default RegisterPage;
