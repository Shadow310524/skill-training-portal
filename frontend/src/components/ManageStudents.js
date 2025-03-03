import React, { useState, useEffect } from "react";
import "../Css/AdminDashboard.css";

const ManageStudents = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: "", course: "" });

  // Fetch students from backend
  useEffect(() => {
    fetch("http://localhost:8080/api/students")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  // Add student to backend
  const handleAddStudent = () => {
    fetch("http://localhost:8080/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStudent),
    })
      .then((response) => response.json())
      .then((data) => {
        setStudents([...students, data]); // Update UI
        setNewStudent({ name: "", course: "" });
      })
      .catch((error) => console.error("Error adding student:", error));
  };

  // Remove student
  const handleRemoveStudent = (id) => {
    fetch(`http://localhost:8080/api/students/${id}`, { method: "DELETE" })
      .then(() => {
        setStudents(students.filter((student) => student.id !== id)); // Update UI
      })
      .catch((error) => console.error("Error deleting student:", error));
  };

  return (
    <div className="dashboard-container">
      <h2>Manage Students</h2>
      <div className="student-form">
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={newStudent.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="course"
          placeholder="Course Name"
          value={newStudent.course}
          onChange={handleInputChange}
          required
        />
        <button onClick={handleAddStudent}>Add Student</button>
      </div>

      <div className="student-list">
        <h3>Student List</h3>
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.name} - {student.course}
              <button onClick={() => handleRemoveStudent(student.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageStudents;
