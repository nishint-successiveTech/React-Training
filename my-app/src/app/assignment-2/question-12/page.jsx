"use client";
import VoteCount from "@/components/Assignment2/voteCount";
import VotingButtons from "@/components/Assignment2/votingButton";
import { initialState, voteReducer } from "@/reducer/voteReducer";
import React, { useReducer } from "react";

const page = () => {
  const [state, dispatch] = useReducer(voteReducer, initialState);
  return (
    <div>
      <center>
        <h1>VOTING APP</h1>
        <VotingButtons dispatch={dispatch} />
        <VoteCount votes={state} />
      </center>
    </div>
  );
};

export default page;
