"use client";
import React from "react";

function UserProfile(props) {
  const { name, email, phone } = props;
  return (
    <div className="">
      <p>Name : {name}</p>
      <p>Email : {email}</p>
      <p> Phone number : {phone}</p>
    </div>
  );
}

export default UserProfile;
