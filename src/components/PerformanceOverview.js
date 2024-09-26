import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import '../Css/StudentDashboard.css';

const PerformanceOverview = () => {
  const performanceData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Skill Progress',
        data: [70, 85, 90, 95],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h1>Performance Overview</h1>
      <div className="block-container">
        <div className="block-content">
          <div className="chart-container">
            <Line data={performanceData} options={{ responsive: true, maintainAspectRatio: false }} className="chart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOverview;
