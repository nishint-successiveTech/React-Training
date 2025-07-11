import Weather from "@/components/Assignment1/Weather";
import React from "react";

const page = () => {
  return (
    <div>
      <center>
        <h1>
          3.Create a functional component named Weather that accepts a prop
          called temperature (a number). Display a message like "It's sunny
          today!" if the temperature is above 25°C and "It's cold today!" if the
          temperature is below 10°C. Import and render the Weather component in
          the App component with different temperature values.
        </h1>
        <br></br>
        <hr></hr>
        <h1>Temp:20</h1>
        <Weather temp={20} />
      </center>
    </div>
  );
};

export default page;

