// index.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './pages/LoginForm';
import PasswordManager from './pages/PasswordManager';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <PasswordManager />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
