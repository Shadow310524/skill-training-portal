import React from 'react';
import Navbar from './Navbar';
import '../Css/AttendanceMonitoring.css';

const AttendanceMonitoring = () => {
  return (
    <div>
      <Navbar userRole="faculty" />
      <div className="container">
        <h2>Attendance Monitoring</h2>
        {/* Add functionality for monitoring attendance */}
      </div>
    </div>
  );
};

export default AttendanceMonitoring;
