import React, { useState } from 'react';
import '../Css/AdminDashboard.css';

const AllocateCourses = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [course, setCourse] = useState('');
  const [skillType, setSkillType] = useState('');

  const daySkills = ['C', 'C++', 'Python', 'Java'];
  const nightSkills = ['Full Stack', 'App Development', 'React.js', 'DSA'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setCourse('');
      setSkillType('');
    }, 2000);
  };

  return (
    <div className="dashboard-container">
      <h2>Allocate Courses</h2>
      <form onSubmit={handleSubmit} className="course-form">
        <select value={course} onChange={(e) => setCourse(e.target.value)} required>
          <option value="">Select Course</option>
          {skillType === 'day' && daySkills.map((skill, index) => (
            <option key={index} value={skill}>{skill}</option>
          ))}
          {skillType === 'night' && nightSkills.map((skill, index) => (
            <option key={index} value={skill}>{skill}</option>
          ))}
        </select>
        <select value={skillType} onChange={(e) => setSkillType(e.target.value)} required>
          <option value="">Select Skill Type</option>
          <option value="day">Day Skill</option>
          <option value="night">Night Skill</option>
        </select>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default AllocateCourses;
