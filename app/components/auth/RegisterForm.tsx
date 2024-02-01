"use client";

import React, { useState } from "react";
import apiClient from "../../api/utils/apiClient";
import axios, { isAxiosError } from "axios";

interface FormData {
  username: string;
  password: string;
  confirmedPassword: string;
}

const RegisterForm = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
    confirmedPassword: "",
  });
  const { username, password, confirmedPassword } = formData;

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const confirmFormValidity = (): boolean => {
    if (username === "" || password === "" || confirmedPassword === "") {
      setMessage("Please fill out all fields");
      return false;
    }
    if (password !== confirmedPassword) {
      setMessage("Your passwords do not match");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (confirmFormValidity())
      try {
        const { data } = await apiClient.post("/auth/register", {
          username,
          password,
        });
        if (data) {
          setMessage(data.message);
        } else {
          setMessage("Something went wrong");
          return;
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setMessage(err.response?.data.message);
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
      <label>Confirm Password: </label>
      <input
        type="text"
        name="confirmedPassword"
        value={confirmedPassword}
        onChange={handleChange}
      />
      {message && <p>{message}</p>}
      <button onClick={handleSubmit}>Create Account</button>
    </form>
  );
};

export default RegisterForm;
