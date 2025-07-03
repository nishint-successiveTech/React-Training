import React from "react";

const VoteCount = ({ votes }) => {
  return (
    <div>
      <h3>Current Votes:</h3>
      <p>Option A: {votes.optionA}</p>
      <p>Option B: {votes.optionB}</p>
      <p>Option C: {votes.optionC}</p>
    </div>
  );
};

export default VoteCount;
