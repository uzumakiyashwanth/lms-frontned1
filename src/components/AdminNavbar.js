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
            <Link to="/admin-view-students">Manage Students</Link>
            <Link to="/admin-view-instructors">Manage Instructors</Link>
            <Link to="/admin-manage-courses">Manage Courses</Link>  {/* New Link for course management */}
           {/* <Link to="/admin-manage-roles">Manage User Roles</Link>  {/* New Link for user role management */}
          {/*  <Link to="/admin-platform-settings">Platform Settings</Link>  {/* New Link for platform settings */}
           {/* <Link to="/admin-content-review">Content Review</Link>  {/* New Link for reviewing course content */}
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
};

export default AdminNavbar;
