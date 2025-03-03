import React, { useState, useEffect } from 'react';
import '../Css/AdminDashboard.css';

const AllocateCourses = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [course, setCourse] = useState('');
  const [skillType, setSkillType] = useState('');
  const [allocatedTo, setAllocatedTo] = useState('');
  const [courses, setCourses] = useState([]);
  const [allocations, setAllocations] = useState([]);

  useEffect(() => {
    fetchCourses();
    fetchAllocations(); // Fetch existing allocations
  }, []);

  // Fetch courses from backend
  const fetchCourses = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/courses/all");
      if (!response.ok) throw new Error("Failed to fetch courses");
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // Fetch course allocations from backend
  const fetchAllocations = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/allocations/all");
      if (!response.ok) throw new Error("Failed to fetch allocations");
      const data = await response.json();
      setAllocations(data);
    } catch (error) {
      console.error("Error fetching allocations:", error);
    }
  };

  // Submit new course allocation
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting || !course || !allocatedTo) return;
    setIsSubmitting(true);

    const selectedCourse = courses.find((c) => c.id === parseInt(course));
    const courseData = { 
      courseId: selectedCourse.id,
      allocatedTo: allocatedTo,
      skillType: selectedCourse.skillType
    };

    try {
      const response = await fetch("http://localhost:8080/api/allocations/allocate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(courseData),
      });

      if (!response.ok) throw new Error("Failed to allocate course");

      alert("Course allocated successfully!");
      fetchAllocations(); // Refresh the allocations list
      setCourse("");
      setAllocatedTo("");
    } catch (error) {
      alert("Error allocating course");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Allocate Courses</h2>
      <form onSubmit={handleSubmit} className="course-form">
        <select value={course} onChange={(e) => setCourse(e.target.value)} required>
          <option value="">Select Course</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>{c.courseName} ({c.skillType})</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Enter Faculty/Student Name"
          value={allocatedTo}
          onChange={(e) => setAllocatedTo(e.target.value)}
          required
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Allocate'}
        </button>
      </form>

      <div className="course-list">
        <h3>Allocated Courses</h3>
        <ul>
          {allocations.map((c, index) => (
            <li key={index}>
              {c.course.courseName} - {c.skillType} - Allocated to: {c.allocatedTo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllocateCourses;
