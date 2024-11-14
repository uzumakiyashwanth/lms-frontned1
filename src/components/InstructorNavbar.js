import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Navbar.css';

const InstructorNavbar = () => {
    const navigate = useNavigate();
    const userName = localStorage.getItem("userName"); // Get the logged-in user's name

    const handleLogout = () => {
        localStorage.clear(); // Clear session data
        toast.success("Logged out successfully!");
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/instructor-dashboard">Dashboard</Link>
                <Link to="/instructor-courses">Manage Courses</Link>
            </div>
            <div className="profile-section">
                <div className="profile-icon" onClick={() => document.getElementById('profile-dropdown').classList.toggle('show')}>
                    {userName ? userName.charAt(0).toUpperCase() : "U"} {/* First letter of the name */}
                </div>
                <div id="profile-dropdown" className="dropdown-content">
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                </div>
            </div>
            <ToastContainer />
        </nav>
    );
};

export default InstructorNavbar;
