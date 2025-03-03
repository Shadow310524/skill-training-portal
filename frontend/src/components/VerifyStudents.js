import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/FacultyDashboard.css"; // Ensure this CSS file exists

const VerifyStudents = () => {
  const [students, setStudents] = useState([]);

  // Fetch students from backend
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  // Function to verify or reject a student
  const updateStatus = async (id, status) => {
    const endpoint =
      status === "Verified"
        ? `http://localhost:8080/api/students/${id}/verify`
        : `http://localhost:8080/api/students/${id}/reject`;

    try {
      await axios.put(endpoint);
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.id === id ? { ...student, status } : student
        )
      );
    } catch (error) {
      console.error(`Error updating status for student ${id}:`, error);
    }
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
                {student.status === "Pending" ? (
                  <>
                    <button
                      className="verify-button"
                      onClick={() => updateStatus(student.id, "Verified")}
                    >
                      ✅ Verify
                    </button>
                    <button
                      className="reject-button"
                      onClick={() => updateStatus(student.id, "Rejected")}
                    >
                      ❌ Reject
                    </button>
                  </>
                ) : student.status === "Verified" ? (
                  "✅ Verified"
                ) : (
                  "❌ Rejected"
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
