import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/admin/sidebar/AdminSideBar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/adminHome/dashboard">Admin Dashboard</Link></li>
        <li><Link to="/adminHome/allUsers">All Users</Link></li>
        <li><Link to="/adminHome/createLeads">Create Lead</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
