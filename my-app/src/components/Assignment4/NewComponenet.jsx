"use client";
import { useState } from "react";

function MessageComponent() {
  return <p style={{ color: "green", marginTop: "10px" }}>You typed "show"!</p>;
}

export default function ShowOnInput() {
  const [inputValue, setInputValue] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(inputValue.trim().toLowerCase() === "show");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Controlled Input + Conditional Rendering</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Type "show" and click'
      />
      <button onClick={handleClick} style={{ marginLeft: "10px" }}>
        Submit
      </button>

      {showMessage && <MessageComponent />}
    </div>
  );
}

