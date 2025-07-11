"use client";

import Link from "next/link";
import React from "react";

const Page = () => {
  const assignments = [1, 2, 3, 4,5,6];

  return (
    <div>
      <center>
        <h1>SELECT YOUR ASSIGNMENT PLEASE</h1>
        <ul>
          {assignments.map((id) => (
            <li key={id}>
              <Link href={`/assignment-${id}`}>Assignment {id}</Link>
            </li>
          ))}
        </ul>
      </center>
    </div>
  );
};

export default Page;

