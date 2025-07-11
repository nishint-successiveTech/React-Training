import RandomNumberGenerator from "@/components/Assignment2/RandomNumberGenerator";
import React from "react";

const page = () => {
  return (
    <div>
      <center>
        <h2>
          Q4.Create a functional component called RandomNumberGenerator. Use the
          useState hook to manage a state variable named randomNumber,
          initialized to a random number between 1 and 100. Render the current
          value of randomNumber. Add a button that generates a new random number
          and updates the state when clicked.
        </h2>
        <br></br>
        <hr />
        <RandomNumberGenerator />
      </center>
    </div>
  );
};

export default page;

