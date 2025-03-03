import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar'; 
// Ensure this path is correct

const Dashboard = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  let userRole;
  if (currentPath.startsWith('/dashboard/admin')) {
    userRole = 'admin';
  } else if (currentPath.startsWith('/dashboard/faculty')) {
    userRole = 'faculty';
  } else if (currentPath.startsWith('/dashboard/student')) {
    userRole = 'student';
  }

  return (
    <div className="dashboard">
      <Navbar userRole={userRole} currentPath={currentPath} />
      <Outlet /> {/* This will render the nested routes */}
    </div>
  );
};

export default Dashboard;
