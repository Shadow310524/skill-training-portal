import React from 'react';
import '../Css/StudentDashboard.css'; // Use the same CSS file

const SubmitFeedback = () => {
  return (
    <div className="student-content">
      <h1>Submit Feedback</h1>
      <form className="feedback-form">
        <label htmlFor="feedback">Your Feedback:</label>
        <textarea id="feedback" name="feedback" rows="6"></textarea>
        <button type="submit" className="submit-button">Submit Feedback</button>
      </form>
    </div>
  );
};

export default SubmitFeedback;
