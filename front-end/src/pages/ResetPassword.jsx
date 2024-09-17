import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = ({ match }) => {
  const [newPassword, setNewPassword] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5000/api/auth/reset-password/${match.params.token}`, { newPassword });
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleResetPassword}>
      <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ResetPassword;

