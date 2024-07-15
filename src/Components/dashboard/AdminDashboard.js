import React from 'react';
import { useSelector } from 'react-redux';
import { useLogout } from '../authComponent/Logout';

const AdminDashboard = () => {
    const token = useSelector(state => state.auth.token);
    const user = useSelector(state => state.auth.user);
    const handleLogout = useLogout();

    console.log("token Data:", token);
    console.log("user from redux Data:", user);

    return (
        <div>
            AdminDashboard
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default AdminDashboard;
