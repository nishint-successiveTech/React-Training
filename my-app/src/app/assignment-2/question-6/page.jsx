import Clock from "@/components/Assignment2/Clock";
import React from "react";

const page = () => {
  return (
    <div>
      <center>
        <h2>
          6.Create a functional component called Clock. Use the useState hook to
          manage a state variable named time initialized to the current time.
          Use the useEffect hook to update the time state every second to
          display the current time. Render the current time in a element. When
          the component unmounts, clear the interval to stop updating the time.
        </h2>
        <br></br>
        <hr />
        <Clock />
      </center>
    </div>
  );
};

export default page;

