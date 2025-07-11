import Counter from "@/components/Assignment2/Counter";
import React from "react";

const page = () => {
  return (
    <div>
      <center>
        <h1>
          1.Create a functional component called Counter. Inside the component,
          use the useState hook to manage a state variable named count
          initialized to 0. Render the current value of count in a paragraph
          element. Add two buttons, one for incrementing the count and another
          for decrementing it. When the user clicks on the buttons, update the
          count state accordingly.
        </h1>
        <br></br>
        <hr></hr>
        <Counter />
      </center>
    </div>
  );
};

export default page;

