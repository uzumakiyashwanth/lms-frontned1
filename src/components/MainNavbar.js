import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import '../App.css'; 
import '../Navbar.css';

const MainNavbar = () => {
    const navigate = useNavigate(); 

    const handleRegisterForCourse = () => {
        navigate('/login'); 
    };

    return (
        <nav>
            <div className="nav-left">
                <Link to="/">Home</Link>
                <Link to="/blog">Blog/Resources</Link>
               <Link to="/contact-us">Contact Us</Link>
                <Link to="/login">Login</Link>

              
            </div>
            <button onClick={handleRegisterForCourse} className="register-button">
                Login to explore
            </button>
        </nav>
    );
};

export default MainNavbar;
