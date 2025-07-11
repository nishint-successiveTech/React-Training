"use client";

import React, { useState } from "react";
import Link from "next/link";

const Page = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(" ");

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      setError("");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div>
      <center>
        <div className="authentication">
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="enter username"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter password"
          />
          <button onClick={handleLogin}>Login</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>

        <center>
          <Link href="question-4/pages/Home">HOME PAGE</Link>
          <br />
          {error === "" && (
            <>
              <Link href="question-4/pages/About">ABOUT PAGE</Link>
              <br />
            </>
          )}
          <Link href="question-4/pages/Not Found Checker">
            NOT FOUND CHECKER
          </Link>
        </center>
      </center>
    </div>
  );
};

export default Page;

