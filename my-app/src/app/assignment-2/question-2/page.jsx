// 2.Create a functional component called PersonForm.
// Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
// Render three input fields for the user to enter their first name, last name, and age.
// As the user types, update the respective state variables.
// Display the entered information below the input fields.

import PersonForm from "@/components/Assignment2/PersonForm";
import React from "react";

const page = () => {
  return (
    <div>
      <center>
        <h2>
          2.Create a functional component called PersonForm. Use the useState
          hook to manage three state variables: firstName, lastName, and age,
          all initialized to empty strings. Render three input fields for the
          user to enter their first name, last name, and age. As the user types,
          update the respective state variables. Display the entered information
          below the input fields. .
        </h2>
        <br></br>
        <hr></hr>
        <PersonForm />
      </center>
    </div>
  );
};

export default page;
