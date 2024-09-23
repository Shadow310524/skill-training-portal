import React, { useState } from 'react';
import '../Css/AdminDashboard.css';

const ManageFaculty = () => {
  const [faculty, setFaculty] = useState([
    { name: 'Dr. John Smith', department: 'Computer Science' },
    { name: 'Prof. Jane Doe', department: 'Mathematics' },
  ]);

  const [newFaculty, setNewFaculty] = useState({ name: '', department: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFaculty({ ...newFaculty, [name]: value });
  };

  const handleAddFaculty = () => {
    setFaculty([...faculty, newFaculty]);
    setNewFaculty({ name: '', department: '' });
  };

  const handleRemoveFaculty = (index) => {
    const updatedFaculty = faculty.filter((_, i) => i !== index);
    setFaculty(updatedFaculty);
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
          {faculty.map((facultyMember, index) => (
            <li key={index}>
              {facultyMember.name} - {facultyMember.department}
              <button onClick={() => handleRemoveFaculty(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageFaculty;
