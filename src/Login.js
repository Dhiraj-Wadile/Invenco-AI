// Updated Login.js

import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [loginOption, setLoginOption] = useState('email');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here
    // For simplicity, I'm using a basic check
    if (
      (loginOption === 'email' && email === 'admin@example.com' && password === 'password') ||
      (loginOption === 'username' && username === 'admin' && password === 'password')
    ) {
      onLogin(loginOption === 'email' ? email : username);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <div className="login-options">
          <span
            className={`login-option ${loginOption === 'email' ? 'active' : ''}`}
            onClick={() => setLoginOption('email')}
          >
            Email
          </span>
          <span
            className={`login-option ${loginOption === 'username' ? 'active' : ''}`}
            onClick={() => setLoginOption('username')}
          >
            Username
          </span>
        </div>
        <div className="form-container">
          {loginOption === 'email' && (
            <>
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </>
          )}
          {loginOption === 'username' && (
            <>
              <label>Username:</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </>
          )}
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
