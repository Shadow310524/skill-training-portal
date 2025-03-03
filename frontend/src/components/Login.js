import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Login.css';
import collegeLogo from '../Images/bit_logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(""); // Clear previous errors

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json(); // ✅ Parse JSON correctly
        const role = user.role; // ✅ Get the role properly

        if (role === "ADMIN") {
          navigate("/admin");
        } else if (role === "FACULTY") {
          navigate("/faculty");
        } else if (role === "STUDENT") {
          navigate("/student");
        }
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      setError("Server error, please try again later.");
    }
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={collegeLogo} alt="College Logo" className="college-logo" />
      </div>
      <div className="form-container">
        <h1>Login</h1>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
