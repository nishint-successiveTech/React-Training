"use client";
import { useState } from "react";

export default function ControlledForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    isSubscribed: false,
    gender: "",
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2>Controlled Form</h2>

      <div>
        <label>Name: </label>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Email: </label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>
          <input
            name="isSubscribed"
            type="checkbox"
            checked={formData.isSubscribed}
            onChange={handleChange}
          />
          Subscribe to newsletter
        </label>
      </div>

      <div>
        <label>Gender:</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />{" "}
          Female
        </label>
      </div>

      <button type="submit" style={{ marginTop: "10px" }}>
        Submit
      </button>
    </form>
  );
}
