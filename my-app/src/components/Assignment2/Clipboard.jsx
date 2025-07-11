"use client";
import React from "react";
import useClipboard from "./useClipboard";

const ClipboardComponent = () => {
  const { copied, copyToClipboard } = useClipboard();
  const text = "Copy this text!";

  return (
    <div>
      <p>{text}</p>
      <button onClick={() => copyToClipboard(text)}>Copy</button>
      {copied && <p style={{ color: "green" }}>Copied!</p>}
    </div>
  );
};

export default ClipboardComponent;

