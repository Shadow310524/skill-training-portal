import React from 'react';
import '../Css/Common.css';

const Common = ({ title, emailPlaceholder, passwordPlaceholder, buttonPlaceholder1, login, email, setEmail, password, setPassword }) => {
  return (
    <div className="form-container">
      <h1>{title}</h1>
      <label htmlFor="email">{emailPlaceholder}</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">{passwordPlaceholder}</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>
        {buttonPlaceholder1}
      </button>
    </div>
  );
};

export default Common;
