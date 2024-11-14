import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Navbar.css';

const StudentNavbar = () => {
    const navigate = useNavigate();
    const userName = localStorage.getItem("userName"); // Get the logged-in user's name

    const handleLogout = () => {
        localStorage.clear(); // Clear session data
        toast.success("Logged out successfully!"); // Show toast message
        
        // Delay navigation to allow toast to appear
        setTimeout(() => {
            navigate("/login"); // Redirect to the login page
        }, 1000); // Delay by 1 second (1000 milliseconds)
    };

    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/student-dashboard">Dashboard</Link>
                <Link to="/student-register-course">Register for Course</Link>
            </div>
            <div className="profile-section">
                <div className="profile-icon" onClick={() => document.getElementById('profile-dropdown').classList.toggle('show')}>
                    {userName ? userName.charAt(0).toUpperCase() : "U"} {/* First letter of the name */}
                </div>
                <div id="profile-dropdown" className="dropdown-content">
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                </div>
            </div>
            <ToastContainer /> {/* Toast container for displaying toasts */}
        </nav>
    );
};

export default StudentNavbar;
