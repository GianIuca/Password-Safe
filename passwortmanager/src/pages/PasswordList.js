import React from 'react';

function PasswordList({ passwords }) {
  return (
    <div>
      <h2>Password List</h2>
      <ul>
        {passwords.map((password, index) => (
          <li key={index}>
            <div>Website: {password.website}</div>
            <div>Username: {password.username}</div>
            <div>Password: {password.password}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PasswordList;