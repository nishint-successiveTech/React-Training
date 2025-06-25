import React from "react";

const Button = ({ text, color }) => {
  return (
    <div>
      <h1 style={{ backgroundColor: color }}>{text}</h1>
    </div>
  );
};

export default Button;
