"use client";

import React, { useState } from "react";
import apiClient from "../../api/utils/apiClient";
import axios, { isAxiosError } from "axios";
import { useRouter } from "next/navigation";

interface FormData {
  username: string;
  password: string;
  confirmedPassword: string;
}

const RegisterForm = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
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
    setIsLoading(true);
    if (confirmFormValidity())
      try {
        const { data } = await apiClient.post("/auth/register", {
          username,
          password,
        });
        if (data) {
          setMessage(data.message);
          router.push(`/pages/user/${username}`);
        } else {
          setMessage("Something went wrong");
          return;
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setMessage(err.response?.data.message);
        }
      } finally {
        setIsLoading(false);
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
      <label>Confirm Password: </label>
      <input
        type="password"
        name="confirmedPassword"
        value={confirmedPassword}
        onChange={handleChange}
        className="loginRegisterInput"
      />
      {message && <p>{message}</p>}
      <button onClick={handleSubmit} className="loginRegisterButton">
        Create Account
      </button>
      {isLoading && <p className="loadingMessage">Creating your account...</p>}
    </form>
  );
};

export default RegisterForm;
