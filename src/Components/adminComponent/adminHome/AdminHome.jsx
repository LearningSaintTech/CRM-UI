import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/AdminSidebar';
import '../../../css/admin/sidebar/AdminSideBar.css';

const AdminHome = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminHome;
