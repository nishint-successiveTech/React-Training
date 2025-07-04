"use client"
import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    const [success,setSuccess] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    if(username=="user" && password=="123456"){
        setSuccess(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        name="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
      {success && <div>{`${username} logged in successfully`}</div>}
    </form>
  );
}

export default LoginForm;