import Notification from "@/components/Assignment2/Notification";
import React from "react";

const Page = () => {
  return (
    <div>
      <center>
        <h2>
          Q7.Create a functional component called Notification. Use the useState
          hook to manage a state variable named message initialized to an empty
          string. Use the useEffect hook to show a notification message for 5
          seconds whenever the message state changes. Render the notification
          message in a div element. After 5 seconds, clear the message to hide
          the notification.
        </h2>
        <br></br>
        <hr />
        <h1>
          {" "}
          <Notification />{" "}
        </h1>
      </center>
    </div>
  );
};

export default Page;
