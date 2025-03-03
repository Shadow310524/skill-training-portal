import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/FacultyDashboard.css"; // Ensure correct path

const MarkAttendance = () => {
  const [students, setStudents] = useState([]);
  const [status, setStatus] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/students")
      .then((response) => {
        setStudents(response.data.filter((student) => student.status === "Verified"));
      })
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  const markAttendance = (id, present) => {
    setLoading(true);
    axios
      .post(`http://localhost:8080/api/attendance/${id}?present=${present}`)
      .then(() => {
        setStatus((prevStatus) => ({
          ...prevStatus,
          [id]: present ? "✅ Present" : "❌ Absent",
        }));
      })
      .catch((error) => {
        console.error(`Error marking attendance for ${id}:`, error);
        alert("Failed to mark attendance. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="faculty-dashboard-content">
      <h1 className="attendance-header">📌 Mark Attendance</h1>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Action</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>
                <button
                  className={`present-button ${status[student.id] === "✅ Present" ? "selected" : ""}`}
                  onClick={() => markAttendance(student.id, true)}
                  disabled={loading}
                >
                  ✅ Present
                </button>
                <button
                  className={`absent-button ${status[student.id] === "❌ Absent" ? "selected" : ""}`}
                  onClick={() => markAttendance(student.id, false)}
                  disabled={loading}
                >
                  ❌ Absent
                </button>
              </td>
              <td className="status-indicator">
                {status[student.id] || "⏳ Not Marked"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {loading && <p className="loading-text">Updating attendance...</p>}
    </div>
  );
};

export default MarkAttendance;
