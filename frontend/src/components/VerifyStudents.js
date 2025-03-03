import React from 'react';
import '../Css/FacultyDashboard.css'; // Ensure this CSS file is created

const VerifyStudents = () => {
  const students = [
    { id: 1, name: 'John Doe', status: 'Pending' },
    { id: 2, name: 'Jane Smith', status: 'Verified' },
    { id: 3, name: 'Emily Johnson', status: 'Pending' },
  ]; // Replace with dynamic data if needed

  const handleVerify = (id) => {
    // Add logic to verify student
    console.log(`Verified student with ID: ${id}`);
  };

  return (
    <div className="faculty-dashboard-content">
      <h1>Verify Students</h1>
      <table className="verify-students-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.status}</td>
              <td>
                {student.status === 'Pending' ? (
                  <button
                    className="verify-button"
                    onClick={() => handleVerify(student.id)}
                  >
                    Verify
                  </button>
                ) : (
                  'Verified'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerifyStudents;
