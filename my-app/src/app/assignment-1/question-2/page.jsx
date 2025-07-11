import React from "react";
import data from "./data";
import UserCard from "@/components/Assignment1/UserCard";

const page = () => {
  return (
    <div>
      <center>
        <h1>
          Q2.Create a functional component named UserCard that accepts the
          following props: name, email, and avatarURL. Use the props to display
          the user's name, email, and an image (avatar) in the UserCard
          component. Create multiple instances of the UserCard component with
          different user data.
        </h1>
        <br></br>
        <hr></hr>
        {data.map((item, index) => (
          <UserCard
            key={index}
            name={item.name}
            email={item.email}
            avatarUrl={item.avatarUrl}
          >
            UserCard
          </UserCard>
        ))}
      </center>
    </div>
  );
};

export default page;

