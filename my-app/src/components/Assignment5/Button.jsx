"use client";

import React from "react";

export const Button = (props) => {
  const { buttonType, clickHandlers } = props;

  return (
    <button
      onClick={clickHandlers.click}
      style={{
        background:
          buttonType == "Primary"
            ? "blue"
            : buttonType == "Secondary"
            ? "gray"
            : "red",
        color: "white",
      }}
    >
      {buttonType}
    </button>
  );
};