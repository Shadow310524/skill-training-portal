import React from 'react';
import '../Css/FacultyDashboard.css'; // Ensure this CSS file is created

const ViewFeedback = () => {
  const feedbacks = [
    { id: 1, student: 'John Doe', feedback: 'Great session!' },
    { id: 2, student: 'Jane Smith', feedback: 'Very informative.' },
    { id: 3, student: 'Emily Johnson', feedback: 'Well organized.' },
  ]; // Replace with dynamic data if needed

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
              <td>{feedback.student}</td>
              <td>{feedback.feedback}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewFeedback;
