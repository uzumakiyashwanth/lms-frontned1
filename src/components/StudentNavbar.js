import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Navbar.css'; 

const StudentNavbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login");
    };

    return (
        <nav>
            <div className="nav-left">
                <Link to="/student-dashboard">Dashboard</Link>
                <Link to="/student-register-course">Register for Course</Link>
                
            </div>
            <button onClick={handleLogout} className="logout-button">Logout</button>
        </nav>
    );
};

export default StudentNavbar;
