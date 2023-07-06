import React, { useState } from 'react';
import './PMModal.css';
import bcrypt from 'bcryptjs';

const PasswordManager = ({ onLogout }) => {
  const [websites, setWebsites] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [newWebsite, setNewWebsite] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newMasterUsername, setNewMasterUsername] = useState('');
  const [newMasterPassword, setNewMasterPassword] = useState('');
  const [editWebsite, setEditWebsite] = useState('');
  const [editUsername, setEditUsername] = useState('');
  const [editPassword, setEditPassword] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showChangeCredentialsModal, setShowChangeCredentialsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [hasChangedCredentials, setHasChangedCredentials] = useState(false);


  const openAddModal = () => {
    setShowAddModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
    setNewWebsite('');
    setNewUsername('');
    setNewPassword('');
  };

  const openChangeCredentialsModal = () => {
    setShowChangeCredentialsModal(true);
  };

  const closeChangeCredentialsModal = () => {
    setShowChangeCredentialsModal(false);
    setNewMasterUsername('');
    setNewMasterPassword('');
  };

  const openEditModal = (index) => {
    setShowEditModal(true);
    setEditWebsite(websites[index].website);
    setEditUsername(websites[index].username);
    setEditPassword(websites[index].password);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setEditWebsite('');
    setEditUsername('');
    setEditPassword('');
  };

  const addWebsite = (e) => {
    e.preventDefault();
    if (newWebsite && newUsername && newPassword) {
      const newWebsiteItem = {
        website: newWebsite,
        username: newUsername,
        password: newPassword,
      };
      setWebsites([...websites, newWebsiteItem]);
      closeAddModal();
    } else {
      alert('Please fill in all fields');
    }
  };

  const changeMasterCredentials = (e) => {
    e.preventDefault();
    if (newMasterUsername && newMasterPassword) {
      const hashedPassword = bcrypt.hashSync(newMasterPassword, 10);
      localStorage.setItem('masterUsername', newMasterUsername);
      localStorage.setItem('masterPassword', hashedPassword);

      setHasChangedCredentials(true);
      closeChangeCredentialsModal();
    } else {
      alert('Please fill in all fields');
    }
  };

  const updateWebsite = (e) => {
    e.preventDefault();
    if (editWebsite && editUsername && editPassword) {
      closeEditModal();
    } else {
      alert('Please fill in all fields');
    }
  };

  const deleteWebsite = (index) => {
    const updatedWebsites = [...websites];
    updatedWebsites.splice(index, 1);
    setWebsites(updatedWebsites);
  };

  const handleLogout = () => {
    onLogout();
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-manager">
      {hasChangedCredentials && <p>MasterCredentials have been changed successfully!</p>}
      <h1>Password Manager</h1>
      <button onClick={openChangeCredentialsModal}>Change Master Credentials</button>
      <button onClick={handleLogout}>Logout</button>

      <div className="column-container">
        <div className="column">
          <h2 className="column-heading">Website</h2>
          {websites.map((website, index) => (
            <div key={index} className="website-item">
              {website.website}
            </div>
          ))}
        </div>
        <div className="column">
          <h2 className="column-heading">Username</h2>
          {websites.map((website, index) => (
            <div key={index} className="website-item">
              {website.username}
            </div>
          ))}
        </div>
        <div className="column">
          <h2 className="column-heading">Password</h2>
          {websites.map((website, index) => (
            <div key={index} className="website-item password-mask">
              {showPassword ? website.password : '••••••••'}
              <span className="password-toggle" onClick={toggleShowPassword}>
                {showPassword ? '🙈' : '🐵'}
              </span>
              <button className="edit-button" onClick={() => openEditModal(index)}>
                Edit
              </button>
              <button className="delete-button" onClick={() => deleteWebsite(index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      <button onClick={openAddModal}>Add Website</button>

      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Website</h2>
            <form onSubmit={addWebsite}>
              <input
                type="text"
                placeholder="Website"
                value={newWebsite}
                onChange={(e) => setNewWebsite(e.target.value)}
              />
              <input
                type="text"
                placeholder="Username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button type="submit">Save Website</button>
              <button onClick={closeAddModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {showChangeCredentialsModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Change Master Credentials</h2>
            <form onSubmit={changeMasterCredentials}>
              <input
                type="text"
                placeholder="New Username"
                value={newMasterUsername}
                onChange={(e) => setNewMasterUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="New Password"
                value={newMasterPassword}
                onChange={(e) => setNewMasterPassword(e.target.value)}
              />
              <button type="submit">Save Changes</button>
              <button onClick={closeChangeCredentialsModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Website</h2>
            <form onSubmit={updateWebsite}>
              <input
                type="text"
                placeholder="Website"
                value={editWebsite}
                onChange={(e) => setEditWebsite(e.target.value)}
              />
              <input type="text"
                placeholder="Username"
                value={editUsername}
                onChange={(e) => setEditUsername(e.target.value)}
              />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={editPassword}
                onChange={(e) => setEditPassword(e.target.value)}
              />
              <button type="submit">Save Changes</button>
              <button onClick={closeEditModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PasswordManager;
