import React, { useState } from 'react';
import '../Css/StudentDashboard.css';

const RegisterForSkills = () => {
  const [skills, setSkills] = useState({ day: [], night: [] });

  const handleRegister = (skill, type) => {
    setSkills((prevSkills) => ({
      ...prevSkills,
      [type]: [...prevSkills[type], skill],
    }));

    // Save to local storage or state management
    localStorage.setItem('registeredSkills', JSON.stringify({
      ...skills,
      [type]: [...skills[type], skill],
    }));
  };

  return (
    <div className="register-skills-container">
      <h2>Register for Skills</h2>
      <div>
        {/* Implement registration logic here */}
        <button onClick={() => handleRegister('Skill A', 'day')}>Register Skill A (Day)</button>
        <button onClick={() => handleRegister('Skill B', 'night')}>Register Skill B (Night)</button>
      </div>
      <div>
        <h3>Registered Day Skills</h3>
        <ul className="register-skills-list">
          {skills.day.map((skill, index) => <li key={index}>{skill}</li>)}
        </ul>
        <h3>Registered Night Skills</h3>
        <ul className="register-skills-list">
          {skills.night.map((skill, index) => <li key={index}>{skill}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default RegisterForSkills;
