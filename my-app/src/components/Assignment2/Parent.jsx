"use client";
import React, { useState, useCallback } from "react";
import Child from "./child";

const Parent = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div>
      <Child count={count} increment={increment} reset={reset} />
    </div>
  );
};

export default Parent;

