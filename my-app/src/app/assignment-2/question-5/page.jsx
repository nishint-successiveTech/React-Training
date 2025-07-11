import CounterWithStep from "@/components/Assignment2/CounterWithStep";
import React from "react";

const page = () => {
  return (
    <div>
      <center>
        <h2>
          5.Create a functional component called CounterWithStep. Use the
          useState hook to manage a state variable named count initialized to 0.
          Render the current value of count in a para element. Add two buttons,
          one for incrementing the count and another for decrementing it. Add an
          input field where the user can specify a step value. Update the count
          using the specified step value when the buttons are clicked.
        </h2>
        <br></br>
        <hr />
        <CounterWithStep />
      </center>
    </div>
  );
};

export default page;

