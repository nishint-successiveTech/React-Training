"use client";
import { useState } from "react";

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);

    if (value === "" || isNaN(value)) {
      setFahrenheit("");
    } else {
      const f = (parseFloat(value) * 9) / 5 + 32;
      setFahrenheit(f.toFixed(2));
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);

    if (value === "" || isNaN(value)) {
      setCelsius("");
    } else {
      const c = ((parseFloat(value) - 32) * 5) / 9;
      setCelsius(c.toFixed(2));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Temperature Converter</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>Celsius: </label>
        <input
          type="text"
          value={celsius}
          onChange={handleCelsiusChange}
          placeholder="Enter °C"
        />
      </div>

      <div>
        <label>Fahrenheit: </label>
        <input
          type="text"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          placeholder="Enter °F"
        />
      </div>
    </div>
  );
}
