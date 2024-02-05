import React from "react";

import LoginForm from "../../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <>
      <h1 className="text-xl text-center font-semibold pb-2">Log In</h1>
      <main>
        <LoginForm />
      </main>
    </>
  );
};

export default LoginPage;
