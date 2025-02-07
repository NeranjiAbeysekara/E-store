import React, { useState } from "react";
import "./AddAdmin.css";

const AddAdmin = () => {
  const [adminName, setAdminName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`New Admin Added: ${adminName}`);
    setAdminName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="add-admin-container">
      <h2>Add New Admin</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="add-admin-btn">Add Admin</button>
      </form>
    </div>
  );
};

export default AddAdmin;
