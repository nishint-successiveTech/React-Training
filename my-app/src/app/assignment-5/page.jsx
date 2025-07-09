"use client";
import React from "react";
import Link from "next/link";

const Page = () => {
  const questions = [1, 2, 3, 4, 5, 6, 7, 12, 13, 14, 15, 16];

  return (
    <div>
      <center>
        <h1>SELECT YOUR QUESTION NUMBER:</h1>
        <ul>
          {questions.map((id) => (
            <li key={id}>
              <Link href={`/assignment-5/question-${id}`}>Question {id}</Link>
            </li>
          ))}
        </ul>
      </center>
    </div>
  );
};

export default Page;

