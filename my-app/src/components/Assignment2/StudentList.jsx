"use client";
import React, { useState, useMemo } from "react";

const StudentList = () => {
  const [students, setStudents] = useState(["Alice", "Bob", "Charlie"]);
  const [newName, setNewName] = useState("");

  const addStudent = () => {
    if (newName.trim() === "") return;
    setStudents([...students, newName]);
    setNewName("");
  };

  const studentList = useMemo(() => {
    return students.map((name, index) => <li key={index}>{name}</li>);
  }, [students]);

  return (
    <div>
      <h2>Student List</h2>

      <input
        type="text"
        value={newName}
        placeholder="Enter student name"
        onChange={(e) => setNewName(e.target.value)}
      />

      <button onClick={addStudent}>Add Student</button>

      <ul>{studentList}</ul>
    </div>
  );
};

export default StudentList;
