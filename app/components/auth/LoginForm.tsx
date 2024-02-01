"use client";

import React, { useState } from "react";
import apiClient from "../../api/utils/apiClient";
// import createAuthenticatedApiClient from "../../api/utils/authenticatedApiClient";
import axios, { isAxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";

interface FormData {
  username: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();
  // const authContext = useAuth();
  // const apiClient = createAuthenticatedApiClient(authContext);
  const { login, logUsername } = useAuth();

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
          const { token, username } = await data;
          login(token);
          logUsername(username);
          router.push(`/pages/user/${username}`);
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
    <form className="loginRegisterForm" onSubmit={handleSubmit}>
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
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
