// 7.Create a functional component called Notification.
// Use the useState hook to manage a state variable named message initialized to an empty string.
// Use the useEffect hook to show a notification message for 5 seconds whenever the message state changes.
// Render the notification message in a <div> element.
// After 5 seconds, clear the message to hide the notification.

"use client";
import React, { useState, useEffect } from "react";

const Notification = () => {
  const [message, setMessage] = useState("This is initial state");

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage("Back to initial state");
      }, 5000);
    }
  }, [message]);

  return (
    <div>
      <button onClick={() => setMessage("This is a notification!")}>
        Show Notification
      </button>
      {message && <div>{message}</div>}
    </div>
  );
};

export default Notification;
