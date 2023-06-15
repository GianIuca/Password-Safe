import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../PasswordManager.css';

function LoginForm({ onLogin }) {
    const [masterUsername, setMasterUsername] = useState('');
    const [masterPassword, setMasterPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (masterUsername === 'test' && masterPassword === 'test') {
            onLogin && onLogin(masterUsername, masterPassword);
        } else {
            window.alert('Please enter the correct master username and password.');
        }
    };

    const handleMasterUsernameChange = (e) => {
        setMasterUsername(e.target.value);
    };

    const handleMasterPasswordChange = (e) => {
        setMasterPassword(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="mb-4">
                <label htmlFor="master-username">Master Username:</label>
                <input
                    type="text"
                    id="master-username"
                    value={masterUsername}
                    onChange={handleMasterUsernameChange}
                />
            </div>
            <div className="mb-6">
                <label htmlFor="master-password">Master Password:</label>
                <input
                    type="password"
                    id="master-password"
                    value={masterPassword}
                    onChange={handleMasterPasswordChange}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;
