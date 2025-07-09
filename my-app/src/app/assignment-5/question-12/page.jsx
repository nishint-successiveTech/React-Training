"use client";

import { Button } from "@/components/Assignment5/Button";


const ButtonPage = () => {
  const clickHandlers = {
    click: () => {
      console.log("Button is clicked");
    }
  };
  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <p>
        {" "}
        Q12 Create a reusable Button component that accepts props to apply
        different styles such as primary, secondary, and danger, along with
        click handlers. Demonstrate how to use this Button component within a
        sample Next.js application.
      </p>
      <h1>Reusable Button</h1>
      <Button buttonType={"Primary"} clickHandlers={clickHandlers} />
      <Button buttonType={"Secondary"} clickHandlers={clickHandlers} />
      <Button buttonType={"Danger"} clickHandlers={clickHandlers} />
    </div>
  );
};

export default ButtonPage;
