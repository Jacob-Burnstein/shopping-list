"use client";

import React, { useState } from "react";
import apiClient from "../api/utils/apiClient";
import axios, { isAxiosError } from "axios";

interface FormData {
  username: string;
  password: string;
}

const LoginForm = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formData.username.length < 1 && formData.password.length < 1) {
      setMessage("Please fill out both fields");
    } else {
      try {
        const { data } = await apiClient.post("/users/login", formData);
        if (data) {
          const { token, message } = await data;
          localStorage.setItem("token", token);
          setMessage(message);
        } else {
          setMessage("Invalid Credentials");
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setMessage(err.response?.data.message);
        } else setMessage("Invalid Credentials");
      }
    }
  };

  return (
    <form className="loginRegisterForm">
      <label>Username: </label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <label>Password: </label>
      <input
        type="text"
        name="password"
        value={password}
        onChange={handleChange}
      />
      {message && <p>{message}</p>}
      <button onClick={handleSubmit}>Log In</button>
    </form>
  );
};

export default LoginForm;
