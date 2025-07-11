"use client";
import React, { useState } from "react";

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );

  const newRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div>
      <h1>Random Number: {randomNumber}</h1>
      <button onClick={newRandomNumber}>NEW RANDOM NUMBER</button>
    </div>
  );
};

export default RandomNumberGenerator;

