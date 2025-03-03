import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    // Clear user authentication data (if any)
    localStorage.removeItem('userRole'); // Example: Clear role from local storage
    localStorage.removeItem('authToken'); // Example: Clear auth token

    // Navigate to login page
    navigate('/login');
  }, [navigate]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default Logout;
