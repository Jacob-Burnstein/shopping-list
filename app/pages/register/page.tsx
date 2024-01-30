import React from "react";
import LoginButton from "../../components/footerLinks/LoginLink";
import HomeButton from "../../components/footerLinks/HomeLink";
import RegisterForm from "../../components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <>
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
