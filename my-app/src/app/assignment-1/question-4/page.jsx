import Counter from "@/components/Assignment1/Counter";
import React from "react";

const page = () => {
  return (
    <div>
      <center>
        <h1>
          4.Create a functional component named Counter that displays a count
          and two buttons: "Increment" and "Decrement". Implement event handlers
          for the "Increment" and "Decrement" buttons to increase and decrease
          the count. Display the updated count on the screen.
        </h1>
        <br></br>
        <hr></hr>
        <Counter />
      </center>
    </div>
  );
};

export default page;

