import React from "react";
import RegisterForm from "../../components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <h1 className="text-xl font-semibold pb-2">Register</h1>
      <main>
        <RegisterForm />
      </main>
    </>
  );
};

export default RegisterPage;
