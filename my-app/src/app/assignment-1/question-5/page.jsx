import Tasklist from "@/components/Assignment1/Tasklist";
import React from "react";

const page = () => {
  const arr2 = [
    "Complete assignment",
    "Review pull requests",
    "Update documentation",
    "Push to GitHub",
    "Test the app",
  ];

  return (
    <div>
      <center>
        <h1>
          5.Create a functional component named TaskList that accepts an array
          of task names as a prop. Use the map function to render each task name
          as a list item. Import and render the TaskList component in the App
          component with an array of tasks.
        </h1>
        <br></br>
        <hr></hr>
        <Tasklist arr={arr2} />
      </center>
    </div>
  );
};

export default page;

