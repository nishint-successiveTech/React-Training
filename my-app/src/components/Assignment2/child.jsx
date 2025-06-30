import React from 'react';

const Child = ({ count, increment, reset }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Child;
