import React from "react";

const UserCard = ({ name, email, avatarUrl }) => {
  return (
    <div>
      <div>
        <center>
          <h2>Name:{name}</h2>
          <h2>Email:{email}</h2>
          <img src={avatarUrl}></img>
        </center>
      </div>
    </div>
  );
};

export default UserCard;
