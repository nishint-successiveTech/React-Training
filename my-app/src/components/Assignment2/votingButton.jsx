import React from "react";

const VotingButtons = ({ dispatch }) => {
  return (
    <div>
      <button onClick={() => dispatch({ type: "VOTE_A" })}>
        Vote Option A
      </button>
      <button onClick={() => dispatch({ type: "VOTE_B" })}>
        Vote Option B
      </button>
      <button onClick={() => dispatch({ type: "VOTE_C" })}>
        Vote Option C
      </button>
    </div>
  );
};

export default VotingButtons;

