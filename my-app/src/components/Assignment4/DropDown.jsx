"use client";
import { useState } from "react";

export default function SelectDropdown() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Select a Fruit</h2>

      <select value={selectedOption} onChange={handleChange}>
        <option value="">-- Choose --</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
        <option value="mango">Mango</option>
      </select>

      {selectedOption && (
        <p style={{ marginTop: "10px", color: "green" }}>
          You selected: <strong>{selectedOption}</strong>
        </p>
      )}
    </div>
  );
}
