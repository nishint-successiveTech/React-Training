"use client";

import { useState, useEffect } from "react";

async function fetchUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      throw new Error("Network error");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  },[]);

  async function loadData() {
    setLoading(true);
    setError("");
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  }

  return (
    <div>
      <h1>All Users</h1>

      {loading && <p>Loading...</p>}

      {error && (
        <div>
          <p style={{ color: "red" }}>{error}</p>
          <button onClick={loadData}>Retry</button>
        </div>
      )}

      {!loading && !error && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
