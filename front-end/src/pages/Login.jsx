import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password }, {
        withCredentials: true // Include cookies in the request
      });

      // Store token if needed
      localStorage.setItem('token', res.data.token);

      // Navigate to dashboard
      navigate('/dashboard');
    } catch (err) {
      console.error(err.response ? err.response.data.message : err.message); // Log error for debugging
      setError(err.response ? err.response.data.message : 'An error occurred'); // Show error to user
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          {error && <p className="error-message">{error}</p>} {/* Display error messages */}
          <button type="submit">Login</button>
        </form>
        <a href="/signup" className="auth-link">Don't have an account? Sign Up</a><br /><br />
        <a href="/forgot-password" className="auth-link">Forgot password? </a>
      </div>
    </div>
  );
};

export default Login;
