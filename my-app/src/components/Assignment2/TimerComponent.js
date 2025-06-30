"use client";
import React from "react";
import useTimer from "./userTImer";


const TimerComponent = () => {
  const { time, start, pause, reset } = useTimer(10); 

  return (
    <div>
      <h2>Time Left: {time} sec</h2>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default TimerComponent;
