"use client";
import { useState, useEffect } from "react";

const useTimer = (startTime) => {
  const [time, setTime] = useState(startTime);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running, time]);

  const start = () => setRunning(true);
  const pause = () => setRunning(false);
  const reset = () => {
    setRunning(false);
    setTime(startTime);
  };

  return { time, start, pause, reset };
};

export default useTimer;

