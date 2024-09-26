import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../Css/StudentDashboard.css';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState({ day: [], night: [] });

  // Fetch registered skills from local storage or state management
  useEffect(() => {
    const registeredSkills = JSON.parse(localStorage.getItem('registeredSkills')) || { day: [], night: [] };
    setSkills(registeredSkills);
  }, []);

  const navigateTo = (path) => {
    try {
      navigate(path);
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <div>
      <Navbar userRole="student" />
      <div className="dashboard-container">
        <h1>Student Dashboard</h1>
        <div className="widget-container">
          <div
            className="widget"
            onClick={() => navigateTo('/register-for-skills')}
            role="button"
            aria-label="Register for Skills"
          >
            <i className="fas fa-book-open"></i>
            <h3>Register for Skills</h3>
          </div>
          <div
            className="widget"
            onClick={() => navigateTo('/take-daily-fa-tests')}
            role="button"
            aria-label="Take Daily FA Tests"
          >
            <i className="fas fa-clipboard-check"></i>
            <h3>Take Daily FA Tests</h3>
          </div>
          <div
            className="widget"
            onClick={() => navigateTo('/submit-feedback')}
            role="button"
            aria-label="Submit Feedback"
          >
            <i className="fas fa-comments"></i>
            <h3>Submit Feedback</h3>
          </div>
          <div
            className="widget"
            onClick={() => navigateTo('/attendance-tracker')}
            role="button"
            aria-label="Attendance Tracker"
          >
            <i className="fas fa-calendar-check"></i>
            <h3>Attendance Tracker</h3>
          </div>
          <div
            className="widget"
            onClick={() => navigateTo('/performance-overview')}
            role="button"
            aria-label="Performance Overview"
          >
            <i className="fas fa-chart-line"></i>
            <h3>Performance Overview</h3>
          </div>
        </div>
        <div className="block-container">
          <h2>Registered Skills</h2>
          <div className="block-content">
            <h3>Day Skills</h3>
            <ul>
              {skills.day.length ? skills.day.map((skill, index) => (
                <li key={index}>{skill}</li>
              )) : <li>No day skills registered</li>}
            </ul>
            <h3>Night Skills</h3>
            <ul>
              {skills.night.length ? skills.night.map((skill, index) => (
                <li key={index}>{skill}</li>
              )) : <li>No night skills registered</li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
