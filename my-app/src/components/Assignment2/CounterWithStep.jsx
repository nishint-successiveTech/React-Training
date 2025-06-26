// 5.Create a functional component called CounterWithStep.
// Use the useState hook to manage a state variable named count initialized to 0.
// Render the current value of count in a <p> element.
// Add two buttons, one for incrementing the count and another for decrementing it.
// Add an input field where the user can specify a step value.
// Update the count using the specified step value when the buttons are clicked.
// import React from 'react'

"use client";
import { useState } from "react";

const CounterWithStep = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const handleStepChange = (e) => {
    const newNumber=parseInt(e.target.value,10)
    setStep(isNaN(newNumber)?"":newNumber)
  };

  const increment = () => {
    setCount((count) => count + step);
  };
  const decrement = () => {
    setCount((count) => count - step);
  };

  <input></input>;

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <input type="number" value={step} onChange={handleStepChange}/>
    </div>
  );
};

export default CounterWithStep;
