"use client";

import React, { useEffect, useState } from "react";

const Clock = () => {
  const [currTime, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
  });

  return <div>Current Time is: {currTime.toLocaleTimeString()}</div>;
};

export default Clock;

