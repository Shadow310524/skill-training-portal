import React, { useState } from 'react';
import '../Css/AdminDashboard.css';

const ManageStudents = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', course: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleAddStudent = () => {
    setStudents([...students, newStudent]);
    setNewStudent({ name: '', course: '' });
  };

  const handleRemoveStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
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
          {students.map((student, index) => (
            <li key={index}>
              {student.name} - {student.course}
              <button onClick={() => handleRemoveStudent(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageStudents;
