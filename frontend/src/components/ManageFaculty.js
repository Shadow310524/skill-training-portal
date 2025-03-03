import React, { useState, useEffect } from "react";
import "../Css/AdminDashboard.css";

const ManageFaculty = () => {
  const [faculty, setFaculty] = useState([]);
  const [newFaculty, setNewFaculty] = useState({ name: "", department: "" });

  // Fetch faculty from backend
  useEffect(() => {
    fetch("http://localhost:8080/api/faculty")
      .then((response) => response.json())
      .then((data) => setFaculty(data))
      .catch((error) => console.error("Error fetching faculty:", error));
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFaculty({ ...newFaculty, [name]: value });
  };

  // Add faculty to backend
  const handleAddFaculty = () => {
    fetch("http://localhost:8080/api/faculty", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFaculty),
    })
      .then((response) => response.json())
      .then((data) => {
        setFaculty([...faculty, data]); // Update UI
        setNewFaculty({ name: "", department: "" });
      })
      .catch((error) => console.error("Error adding faculty:", error));
  };

  // Remove faculty
  const handleRemoveFaculty = (id) => {
    fetch(`http://localhost:8080/api/faculty/${id}`, { method: "DELETE" })
      .then(() => {
        setFaculty(faculty.filter((facultyMember) => facultyMember.id !== id)); // Update UI
      })
      .catch((error) => console.error("Error deleting faculty:", error));
  };

  return (
    <div className="dashboard-container">
      <h2>Manage Faculty</h2>
      <form className="faculty-form">
        <input
          type="text"
          name="name"
          placeholder="Faculty Name"
          value={newFaculty.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={newFaculty.department}
          onChange={handleInputChange}
          required
        />
        <button type="button" onClick={handleAddFaculty}>Add Faculty</button>
      </form>

      <div className="faculty-list">
        <h3>Faculty List</h3>
        <ul>
          {faculty.map((facultyMember) => (
            <li key={facultyMember.id}>
              {facultyMember.name} - {facultyMember.department}
              <button onClick={() => handleRemoveFaculty(facultyMember.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageFaculty;
