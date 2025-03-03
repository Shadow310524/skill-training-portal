import React from 'react';
import '../Css/StudentDashboard.css'; // Use the same CSS file

const TakeDailyFATests = () => {
  return (
    <div className="student-content">
      <h1>Take Daily FA Tests</h1>
      <div className="test-list">
        <div className="test-item">
          <h3>Test 1: Introduction to Python</h3>
          <button className="start-test-button">Start Test</button>
        </div>
        <div className="test-item">
          <h3>Test 2: Advanced Java Concepts</h3>
          <button className="start-test-button">Start Test</button>
        </div>
        <div className="test-item">
          <h3>Test 3: Web Development Basics</h3>
          <button className="start-test-button">Start Test</button>
        </div>
      </div>
    </div>
  );
};

export default TakeDailyFATests;
