import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./AdminDash.css";

const AdminDashboard = () => {
  return (
 
      <div className="admin-dashboard">
        {/* Sidebar Navigation */}
        <div className="sidebar">
          <h2>Admin Panel</h2>
          <ul>
            <li><Link to="/users">👥 List of Users</Link></li>
            <li><Link to="/orders">📦 List of Orders</Link></li>
            <li><Link to="/add-item">➕ Add New Item</Link></li>
            <li><Link to="/add-admin">🛠 Add New Admin</Link></li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="content">
          <h2>Welcome to the Admin Dashboard</h2>
          <p>Select an option from the sidebar to proceed.</p>
        </div>
      </div>
  
  );
};

export default AdminDashboard;



