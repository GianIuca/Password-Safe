import React, { useState } from 'react';
import LoginForm from './LoginForm';
import PasswordManager from './PasswordManager';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(true);
    console.log("Button pressed");
  };

  return (
    <div>
      {isLoggedIn ? (
        <PasswordManager onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
