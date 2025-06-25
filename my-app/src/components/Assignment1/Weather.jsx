import React from "react";

const Weather = ({ temp }) => {
  if (temp > 25) {
    return <div>Its sunny today</div>;
  } else if (temp < 10) {
    return <div>Its cold today</div>;
  } else {
    return <div>Its normal temp today</div>;
  }
};

export default Weather;
