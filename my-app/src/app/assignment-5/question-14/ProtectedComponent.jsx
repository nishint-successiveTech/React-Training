"use client";
import React from "react";
import withAuth from "./withAuth";
import { redirect } from "next/navigation";

const ProtectedComponent = (props) => {
  const { loggedIn, handleAuth, handleLogout } = props;
  return !loggedIn? (
    redirect("/assignment-5/question-14/login")
  ) : (
    <>
      <div>
        {loggedIn ? (
          <button onClick={handleLogout}>logout</button>
        ) : (
          <button onClick={handleAuth}>login</button>
        )}
      </div>
      {loggedIn && <>User Loggedin successfully</>}
    </>
  );
};

export default withAuth(ProtectedComponent);
