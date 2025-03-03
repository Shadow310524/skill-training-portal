import React, { useEffect, useState } from 'react';
import '../Css/FacultyDashboard.css'; // Ensure this CSS file is available

const ViewFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/feedback/all");
      if (!response.ok) throw new Error("Failed to fetch feedback");
      const data = await response.json();
      setFeedbacks(data);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  return (
    <div className="faculty-dashboard-content">
      <h1>View Feedback</h1>
      <table className="feedback-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback) => (
            <tr key={feedback.id}>
              <td>{feedback.studentName}</td>
              <td>{feedback.feedbackText}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewFeedback;
