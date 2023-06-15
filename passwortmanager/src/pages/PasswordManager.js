import React, { useState } from 'react';
import AddPasswordForm from './AddPasswordForm';
import ChangeMasterCredentialsForm from './ChangeMasterCredentialsForm';
import PasswordList from './PasswordList';
import '../PasswordManager.css';

function PasswordManager({ onLogout }) {
  const [passwords, setPasswords] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showChangeCredentialsForm, setShowChangeCredentialsForm] = useState(false);

  const handleAddPassword = (website, username, password) => {
    setPasswords((prevPasswords) => [
      ...prevPasswords,
      { website, username, password },
    ]);
  };

  const handleChangeMasterCredentials = (newUsername, newPassword) => {
    console.log('New Username:', newUsername);
    console.log('New Password:', newPassword);
  };

  const handleDeletePassword = (index) => {
    setPasswords((prevPasswords) =>
      prevPasswords.filter((_, i) => i !== index)
    );
  };

  const handleLogout = () => {
    // Perform logout logic here
    if (onLogout && typeof onLogout === 'function') {
      onLogout();
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Password Manager</h2>
      <div className="flex mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mr-2"
          onClick={() => setShowAddForm(true)}
        >
          Add Password
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4"
          onClick={() => setShowChangeCredentialsForm(true)}
        >
          Change Master Credentials
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 ml-auto"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <PasswordList passwords={passwords} onDeletePassword={handleDeletePassword} />
      {showAddForm && (
        <AddPasswordForm
          onAddPassword={handleAddPassword}
          onCancel={() => setShowAddForm(false)}
        />
      )}

      {/* Delete functionality will be implemented here */}

      {showChangeCredentialsForm && (
        <ChangeMasterCredentialsForm
          onChangeCredentials={handleChangeMasterCredentials}
          onClose={() => setShowChangeCredentialsForm(false)}
        />
      )}
    </div>
  );
}

export default PasswordManager;
