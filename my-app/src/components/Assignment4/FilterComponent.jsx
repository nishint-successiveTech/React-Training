"use client";
import { useState } from "react";

export default function SearchFilter() {
  const [query, setQuery] = useState("");

  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grapes",
    "Pineapple",
    "Strawberry",
  ];

  const filteredItems = items.filter((item) =>
    item.trim().toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Filter</h2>

      <input
        type="text"
        placeholder="Search fruits..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul style={{ marginTop: "15px" }}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No matching items</li>
        )}
      </ul>
    </div>
  );
}
