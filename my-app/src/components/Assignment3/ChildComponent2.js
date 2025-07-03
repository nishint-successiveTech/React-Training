"use client";
import React, { useState } from "react";

import { useTheme } from "./context/ThemeContext";
import { useAuth } from "./context/AuthContext";
import "./ChildComponent2.css";

const ChildComponent2 = () => {
  const { user, login, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

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
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div
      className="userContainer"
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#222222",
        color: theme === "light" ? "#000000" : "#ffffff",
      }}
    >
      {user ? (
        <>
          <h2>Welcome, {user.username}!</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please log in</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="user-input"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="user-input"
          />

          <button onClick={handleLogin}>Login</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </>
      )}

      <p>
        <strong>Current Theme:</strong> {theme}
      </p>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default ChildComponent2;
