// 4.Create a functional component named Counter that displays a count and two buttons: "Increment" and "Decrement".
// Implement event handlers for the "Increment" and "Decrement" buttons to increase and decrease the count.
// Display the updated count on the screen.

"use client";

import React, { useState } from "react";

const Counter = () => {
  const [currCount, setCount] = useState(0);
  return (
    <div>
      <center>
        <p>Count: {currCount}</p>
        <button onClick={() => setCount((currCount) => currCount + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((currCount) => currCount - 1)}>
          Decrement
        </button>
      </center>
    </div>
  );
};

export default Counter;
