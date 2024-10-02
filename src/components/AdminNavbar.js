import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Navbar.css'; 

const AdminNavbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login");
    };

    return (
        <nav>
            <Link to="/admin-dashboard">Dashboard</Link>
            <Link to="/admin-view-students">View Students</Link>
            <Link to="/admin-view-instructors">View Instructors</Link>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
};

export default AdminNavbar;
