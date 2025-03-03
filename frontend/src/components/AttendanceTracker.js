import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import '../Css/StudentDashboard.css';

const AttendanceTracker = () => {
  const attendanceData = {
    labels: ['Present', 'Absent'],
    datasets: [
      {
        label: 'Attendance',
        data: [22, 3],
        backgroundColor: ['#4CAF50', '#FF5252'],
        hoverBackgroundColor: ['#45A049', '#E53935'],
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h1>Attendance Tracker</h1>
      <div className="block-container">
        <div className="block-content">
          <div className="chart-container">
            <Pie data={attendanceData} options={{ responsive: true, maintainAspectRatio: false }} className="chart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTracker;
