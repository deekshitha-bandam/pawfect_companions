// src/components/Register.js
import React, { useState } from 'react';

const Register = () => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleRegister = () => {
    // Add your user registration logic here
    console.log('Register clicked:', { newUsername, newPassword });
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>
          New Username:
          <input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
        </label>
        <br />
        <label>
          New Password:
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
