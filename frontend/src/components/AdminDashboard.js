import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Ensure Navbar.js is in the same directory as AdminDashboard.js
import '../Css/AdminDashboard.css'; // Ensure AdminDashboard.css is correctly located


const AdminDashboard = () => {
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
      <Navbar userRole="admin" />
      <div className="dashboard-container">
        <h1>Admin Dashboard</h1>
        <div className="widget-container">
          <div
            className="widget"
            onClick={() => navigateTo('/manage-students')}
            role="button"
            aria-label="Manage Students"
          >
            <i className="fas fa-user-graduate"></i>
            <h3>Manage Students</h3>
          </div>
          <div
            className="widget"
            onClick={() => navigateTo('/manage-faculty')}
            role="button"
            aria-label="Manage Faculty"
          >
            <i className="fas fa-chalkboard-teacher"></i>
            <h3>Manage Faculty</h3>
          </div>
          <div
            className="widget"
            onClick={() => navigateTo('/allocate-venues')}
            role="button"
            aria-label="Allocate Venues"
          >
            <i className="fas fa-building"></i>
            <h3>Allocate Venues</h3>
          </div>
          <div
            className="widget"
            onClick={() => navigateTo('/view-reports')}
            role="button"
            aria-label="View Reports"
          >
            <i className="fas fa-file-alt"></i>
            <h3>View Reports</h3>
          </div>
          <div
            className="widget"
            onClick={() => navigateTo('/allocate-courses')}
            role="button"
            aria-label="Allocate Courses"
          >
            <i className="fas fa-book"></i>
            <h3>Allocate Courses</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
