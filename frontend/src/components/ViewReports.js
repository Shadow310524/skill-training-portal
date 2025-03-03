import React from 'react';
import '../Css/AdminDashboard.css';

const ViewReports = () => {
  const reports = [
    { id: 1, title: 'Monthly Attendance Report', date: '2024-08-01' },
    { id: 2, title: 'Skill Training Feedback Report', date: '2024-08-15' },
  ];

  return (
    <div className="dashboard-container">
      <h2>View Reports</h2>
      <div className="report-list">
        <h3>Reports</h3>
        <ul>
          {reports.map((report) => (
            <li key={report.id}>
              {report.title} - {report.date}
              <button>View</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ViewReports;
