"use client";

import { useState } from "react";

import withAuth from "../withAuth";
import { redirect } from "next/navigation";

const Login = (props) => {
  const { setLoggedIn, handleAuth } = props;
  const myUserName = "Nishint";
  const myPassword = "123456";

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userName, password } = formData;

    if (userName === myUserName && password === myPassword) {
      setLoggedIn(true);
      handleAuth();
      redirect("/assignment-5/question-14");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        UserName
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
      </label>

      <label>
        Password
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default withAuth(Login);