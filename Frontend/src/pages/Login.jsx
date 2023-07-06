import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 const handleLogin = (e) => {
  e.preventDefault();

  const initialUsername = 'admin';
  const initialPassword = 'admin';

  if (username === initialUsername && password === initialPassword) {
    onLogin();
  } else {
    alert('Invalid username or password');
  }
};

  

  return (
    <div className="login-modal">
      <div className="login-modal-content">
        <h2 className="login-modal-title">Password Manager</h2>
        <h3 className="login-modal-header">Login</h3>
        <form className="login-modal-form" onSubmit={handleLogin}>
          <input
            className="login-modal-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="login-modal-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-modal-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
