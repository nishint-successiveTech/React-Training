"use client";

import React, { useEffect, useState } from "react";

function PaginatedPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const fetchPosts = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError("Data fetch karne me error aayi.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  return (
    <div>
      <h2>Posts List</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <>
          <ul>
            {currentPosts.map((post) => (
              <li key={post.id}>
                <strong>{post.title}</strong>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: "10px" }}>
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
              Previous
            </button>
            <span style={{ margin: "0 10px" }}>Page {page}</span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={endIndex >= posts.length}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default PaginatedPosts;

