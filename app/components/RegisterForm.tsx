"use client";

import React, { useState } from "react";

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
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formData.password != formData.confirmedPassword) {
      setMessage("Your passwords do not match");
    } else {
      try {
        const response = await fetch("http://localhost:3000/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setMessage("success!");
        } else setMessage(await response.text());
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <form className="loginRegisterForm">
      <label>Username: </label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <label>Password: </label>
      <input
        type="text"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <label>Confirm Password: </label>
      <input
        type="text"
        name="confirmedPassword"
        value={formData.confirmedPassword}
        onChange={handleChange}
      />
      {message && <p>{message}</p>}
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default RegisterForm;
