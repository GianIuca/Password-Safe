// ChangeMasterCredentialsForm.js
import React, { useState } from 'react';

function ChangeMasterCredentialsForm({ currentUsername, currentPassword, onChangeCredentials, onClose }) {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeCredentials(newUsername, newPassword);
    setNewUsername('');
    setNewPassword('');
    onClose();
  };

  return (
    <div>
      <h3>Change Master Password and Username</h3>
      <form onSubmit={handleSubmit}>
        <label>
          New Username:
          <input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} required />
        </label>
        <label>
          New Password:
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
        </label>
        <button type="submit">Change</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default ChangeMasterCredentialsForm;
