"use client";
import React from "react";
import Link from "next/link";

const Page = () => {
  const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <div>
      <center>
        <h1>SELECT YOUR QUESTION NUMBER:</h1>
        <ul>
          {questions.map((id) => (
            <li key={id}>
              <Link href={`/assignment-6/question-${id}`}>Question {id}</Link>
            </li>
          ))}
        </ul>
      </center>
    </div>
  );
};

export default Page;
