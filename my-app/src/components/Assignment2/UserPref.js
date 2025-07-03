"use client";
import React from "react";
import useLocalStorage from "./useLocalStorage";

const UserPreferences = () => {
  const [theme, setTheme, removeTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const themeStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={themeStyle}>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={removeTheme}>Reset</button>
    </div>
  );
};

export default UserPreferences;
