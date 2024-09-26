import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import FacultyDashboard from './components/FacultyDashboard';
import StudentDashboard from './components/StudentDashboard';
import RegisterForSkills from './components/RegisterForSkills'; // Ensure this is created
import TakeDailyFATests from './components/TakeDailyFATests'; // Ensure this is created
import SubmitFeedback from './components/SubmitFeedback'; // Ensure this is created
import ManageStudents from './components/ManageStudents';
import ManageFaculty from './components/ManageFaculty';
import ViewReports from './components/ViewReports';
import VenueAllocation from './components/AllocateVenues';
import AllocateCourses from './components/AllocateCourses';
import MarkAttendance from './components/MarkAttendance';
import VerifyStudents from './components/VerifyStudents';
import ViewFeedback from './components/ViewFeedback'; // Ensure this is created
import AttendanceTracker from './components/AttendanceTracker'; // Ensure this is created
import PerformanceOverview from './components/PerformanceOverview'; // Ensure this is created

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/faculty" element={<FacultyDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/register-for-skills" element={<RegisterForSkills />} />
        <Route path="/take-daily-fa-tests" element={<TakeDailyFATests />} />
        <Route path="/submit-feedback" element={<SubmitFeedback />} />
        <Route path="/manage-students" element={<ManageStudents />} />
        <Route path="/manage-faculty" element={<ManageFaculty />} />
        <Route path="/view-reports" element={<ViewReports />} />
        <Route path="/allocate-venues" element={<VenueAllocation />} />
        <Route path="/allocate-courses" element={<AllocateCourses />} />
        <Route path="/mark-attendance" element={<MarkAttendance />} />
        <Route path="/verify-students" element={<VerifyStudents />} />
        <Route path="/view-feedback" element={<ViewFeedback />} />
        <Route path="/attendance-tracker" element={<AttendanceTracker />} />
        <Route path="/performance-overview" element={<PerformanceOverview />} />
      </Routes>
    </Router>
  );
};

export default App;
