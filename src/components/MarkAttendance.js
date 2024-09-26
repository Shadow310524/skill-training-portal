import React, { useState } from 'react';
import '../Css/FacultyDashboard.css'; // Ensure this CSS file is created

const MarkAttendance = () => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const students = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Emily Johnson' },
  ]; // Replace with dynamic data if needed

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="faculty-dashboard-content">
      <h1>Mark Attendance</h1>
      <div className="attendance-header">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleDateChange}
        />
      </div>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Present</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="save-button">Save</button>
    </div>
  );
};

export default MarkAttendance;
