import React from "react";

const Tasklist = ({ arr }) => {
  return (
    <div>
      <ul>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tasklist;
