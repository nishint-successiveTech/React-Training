"use client";
import React, { useState, useMemo } from "react";

const EmployeeSalary = () => {
  const [employees, setEmployees] = useState([
    { name: "John", salary: 50000 },
    { name: "Jane", salary: 60000 },
    { name: "Mike", salary: 55000 },
  ]);


  const averageSalary = useMemo(() => {
    console.log("Recalculating average salary...");
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    return (total / employees.length).toFixed(2);
  }, [employees]);

 
  const updateSalaries = () => {
    const updated = employees.map((emp) => ({
      ...emp,
      salary: Math.floor(Math.random() * 40000) + 40000, 
    }));
    setEmployees(updated);
  };

  return (
    <div>
      <h2>Employee Salaries</h2>
      <ul>
        {employees.map((emp, index) => (
          <li key={index}>
            {emp.name}: ₹{emp.salary}
          </li>
        ))}
      </ul>

      <h3>Average Salary: ₹{averageSalary}</h3>

      <button onClick={updateSalaries}>Update Salaries</button>
    </div>
  );
};

export default EmployeeSalary;
