import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../Css/Dashboard.css';

const FacultyDashboard = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    try {
      navigate(path);
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <div>
      <Navbar userRole="faculty" />
      <div className="dashboard-container">
        <h1>Faculty Dashboard</h1>
        <div className="widget-container">
          <div
            className="widget"
            onClick={() => navigateTo('/mark-attendance')}
            role="button"
            aria-label="Mark Attendance"
          >
            <i className="fas fa-calendar-check"></i>
            <h3>Mark Attendance</h3>
          </div>
          <div
            className="widget"
            onClick={() => navigateTo('/verify-students')}
            role="button"
            aria-label="Verify Students"
          >
            <i className="fas fa-user-check"></i>
            <h3>Verify Students</h3>
          </div>
          <div
            className="widget"
            onClick={() => navigateTo('/view-feedback')}
            role="button"
            aria-label="View Feedback"
          >
            <i className="fas fa-eye"></i>
            <h3>View Feedback</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
