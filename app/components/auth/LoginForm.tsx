"use client";

import React, { useState } from "react";
import apiClient from "../../api/utils/apiClient";
import axios, { isAxiosError } from "axios";
import { useRouter } from "next/navigation";

interface FormData {
  username: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (formData.username.length < 1 && formData.password.length < 1) {
      setMessage("Please fill out both fields");
    } else {
      try {
        const response = await apiClient.post("/auth/login", {
          username,
          password,
        });
        const data = response.data;
        if (data) {
          router.push(`/pages/user/${username}`);
        } else {
          setMessage("Invalid Credentials");
        }
      } catch (err) {
        setMessage("Something went wrong");
        if (axios.isAxiosError(err)) {
          setMessage(err.response?.data.message);
        } else setMessage("Invalid Credentials");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <form className="loginRegisterForm" onSubmit={handleSubmit}>
      <label>Username: </label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
        className="loginRegisterInput"
      />
      <label>Password: </label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        className="loginRegisterInput"
      />
      {message && <p>{message}</p>}
      <button className="loginRegisterButton" type="submit">
        Log In
      </button>
      {isLoading && <p className="loadingMessage">Signing In...</p>}
    </form>
  );
};

export default LoginForm;
