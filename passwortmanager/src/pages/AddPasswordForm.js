// AddPasswordForm.js
import React, { useState } from 'react';

function AddPasswordForm({ onAddPassword, onClose }) {
  const [website, setWebsite] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPassword(website, username, password);
    setWebsite('');
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h3>Add Password</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Website:
          <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} required />
        </label>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Add</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default AddPasswordForm;
