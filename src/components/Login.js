import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Login.css';
import collegeLogo from '../Images/bit_logo.png';

const Login = () => {
  const [activeRole, setActiveRole] = useState('admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (activeRole === 'admin' && email === 'admin@example.com' && password === 'admin') {
      navigate('/admin');
    } else if (activeRole === 'faculty' && email === 'faculty@example.com' && password === 'faculty') {
      navigate('/faculty');
    } else if (activeRole === 'student' && email === 'student@example.com' && password === 'student') {
      navigate('/student');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={collegeLogo} alt="College Logo" className="college-logo" />
      </div>
      <div className="role-selector">
        <button onClick={() => setActiveRole('admin')} className={activeRole === 'admin' ? 'active' : ''}>
          Admin
        </button>
        <button onClick={() => setActiveRole('faculty')} className={activeRole === 'faculty' ? 'active' : ''}>
          Faculty
        </button>
        <button onClick={() => setActiveRole('student')} className={activeRole === 'student' ? 'active' : ''}>
          Student
        </button>
      </div>
      <div className="form-container">
        <h1>{activeRole.charAt(0).toUpperCase() + activeRole.slice(1)} Login</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>
          Login
        </button>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
