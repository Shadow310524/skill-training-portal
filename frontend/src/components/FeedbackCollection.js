import React, { useState } from 'react';

const FeedbackCollection = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmitFeedback = () => {
    // Handle feedback submission logic
    alert('Feedback submitted!');
  };

  return (
    <div className="section">
      <h2>Submit Feedback</h2>
      <textarea 
        value={feedback} 
        onChange={handleFeedbackChange} 
        placeholder="Enter your feedback" 
      />
      <button onClick={handleSubmitFeedback}>Submit</button>
    </div>
  );
};

export default FeedbackCollection;
