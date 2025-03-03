import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Css/Navbar.css';

const Navbar = ({ userRole }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="navbar">
      <ul>
        {userRole === 'admin' && (
          <>
            <li className={currentPath === '/admin' ? 'active' : ''}><Link to="/admin">Dashboard</Link></li>
            <li className={currentPath === '/manage-students' ? 'active' : ''}><Link to="/manage-students">Manage Students</Link></li>
            <li className={currentPath === '/manage-faculty' ? 'active' : ''}><Link to="/manage-faculty">Manage Faculty</Link></li>
            <li className={currentPath === '/allocate-venues' ? 'active' : ''}><Link to="/allocate-venues">Allocate Venues</Link></li>
            <li className={currentPath === '/view-reports' ? 'active' : ''}><Link to="/view-reports">View Reports</Link></li>
            <li className={currentPath === '/allocate-courses' ? 'active' : ''}><Link to="/allocate-courses">Allocate Courses</Link></li>
          </>
        )}
        {userRole === 'faculty' && (
          <>
            <li className={currentPath === '/faculty' ? 'active' : ''}><Link to="/faculty">Dashboard</Link></li>
            <li className={currentPath === '/mark-attendance' ? 'active' : ''}><Link to="/mark-attendance">Mark Attendance</Link></li>
            <li className={currentPath === '/verify-students' ? 'active' : ''}><Link to="/verify-students">Verify Students</Link></li>
            <li className={currentPath === '/view-feedback' ? 'active' : ''}><Link to="/view-feedback">View Feedback</Link></li>
          </>
        )}
        {userRole === 'student' && (
          <>
            <li className={currentPath === '/student' ? 'active' : ''}><Link to="/student">Dashboard</Link></li>
            <li className={currentPath === '/register-skills' ? 'active' : ''}><Link to="/register-skills">Register for Skills</Link></li>
            <li className={currentPath === '/fa-tests' ? 'active' : ''}><Link to="/fa-tests">Take Daily FA Tests</Link></li>
            <li className={currentPath === '/submit-feedback' ? 'active' : ''}><Link to="/submit-feedback">Submit Feedback</Link></li>
          </>
        )}
        <li><Link to="/">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
