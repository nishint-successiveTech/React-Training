"use client";
import React, { useEffect, useState } from "react";
import withLogger from "./withLogger";

const LoggerComponent = () => {
  const [logger, setLogger] = useState(false);
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("component Updated");
  }, [logger]);

  return (
    <div>
      This is Logger Component
      <button onClick={() => setLogger((prev) => !prev)}>Update</button>
    </div>
  );
};

export default withLogger(LoggerComponent);

