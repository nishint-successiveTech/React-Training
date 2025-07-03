"use client";

import React, { useState } from "react";
import { useAuth } from "./context/AuthContext";

const ChildComponent = () => {
  const { user, login, logout } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }

    if (username === "admin" && password === "1234") {
      login(username);
      setError("");
      setUsername("");
      setPassword("");
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      {user ? (
        <>
          <h2>Welcome, {user.username}!</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please log in.</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button onClick={handleLogin}>Login</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </>
      )}
    </div>
  );
};

export default ChildComponent;
