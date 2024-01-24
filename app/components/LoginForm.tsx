"use client";

import React from "react";

const LoginForm = () => {
  return (
    <form className="loginRegisterForm">
      <label>Username: </label>
      <input type="text" />
      <label>Password: </label>
      <input type="text" />
    </form>
  );
};

export default LoginForm;
