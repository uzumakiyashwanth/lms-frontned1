import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import '../App.css'; 
import '../Navbar.css';

const MainNavbar = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleRegisterForCourse = () => {
        navigate('/Register'); // Navigate to the login page on button click
    };

    return (
        <nav>
            <div className="nav-left">
                <Link to="/">Home</Link>
                <Link to="/blog">Blog/Resources</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/contact">Contact Us</Link>
                
            </div>
            <button onClick={handleRegisterForCourse} className="register-button">
                Register for a Course?
            </button>
        </nav>
    );
};

export default MainNavbar;
