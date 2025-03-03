import React, { useState } from 'react';
import '../Css/StudentDashboard.css';

const SubmitFeedback = () => {
  const [feedback, setFeedback] = useState("");
  const [studentName, setStudentName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const feedbackData = {
      studentName,
      feedbackText: feedback
    };

    try {
      const response = await fetch("http://localhost:8080/api/feedback/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        alert("Feedback submitted successfully!");
        setFeedback("");
        setStudentName("");
      } else {
        alert("Failed to submit feedback.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="student-content">
      <h1>Submit Feedback</h1>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input 
          type="text" 
          id="name" 
          value={studentName} 
          onChange={(e) => setStudentName(e.target.value)} 
          required 
        />

        <label htmlFor="feedback">Your Feedback:</label>
        <textarea 
          id="feedback" 
          rows="6" 
          value={feedback} 
          onChange={(e) => setFeedback(e.target.value)} 
          required 
        ></textarea>

        <button type="submit" className="submit-button">Submit Feedback</button>
      </form>
    </div>
  );
};

export default SubmitFeedback;
