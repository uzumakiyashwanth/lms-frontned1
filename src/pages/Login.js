import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";
import "../cssfiles/Login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        role: "STUDENT"
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Function to validate email format
    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password, role } = formData;

        // Validation checks
        if (!email || !validateEmail(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }
        if (!password) {
            toast.error("Password is required.");
            return;
        }
        if (!role) {
            toast.error("Please select a role.");
            return;
        }

        try {
            // Check for the admin role with hardcoded credentials
            if (role === "ADMIN" && email === "admin@example.com" && password === "admin123") {
                localStorage.setItem("role", role);
                toast.success("Welcome, Admin!");
                navigate("/admin-dashboard");
            } else if (role === "STUDENT") {
                // Fetch student data from the backend
                const response = await axios.get("http://localhost:8080/getregisterationdata");
                const users = response.data;
                const user = users.find(
                    (user) => user.email === email && user.password === password && user.role === role
                );

                if (user) {
                    localStorage.setItem("role", user.role);
                    localStorage.setItem("userName", user.name);
                    toast.success(`Welcome, ${user.name}!`);
                    navigate("/student-dashboard");
                } else {
                    toast.error("Invalid student credentials or role mismatch");
                }
            } else if (role === "INSTRUCTOR") {
                // Fetch instructor data using getAllInstructors
                const response = await axios.get("http://localhost:8080/instructors");
                const instructors = response.data;
                const instructor = instructors.find(
                    (instructor) => instructor.email === email && instructor.password === password && instructor.role === role
                );

                if (instructor) {
                    localStorage.setItem("role", instructor.role);
                    localStorage.setItem("userName", instructor.name);
                    toast.success(`Welcome, ${instructor.name}!`);
                    navigate("/instructor-dashboard");
                } else {
                    toast.error("Invalid instructor credentials or role mismatch");
                }
            }
        } catch (error) {
            console.error("Login error:", error);
            toast.error("An error occurred. Please try again.");
        }
    };

    return (
        <div>
            <MainNavbar />
            <div className="login-container">
                <div className="image-section">
                    <img src="path_to_your_image" alt="Login illustration" />
                </div>
                <div className="form-section">
                    <h2>Login</h2>
                    <center><h3>Explore the Content</h3></center>
                    <form onSubmit={handleSubmit}>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Email"
                        />
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="Password"
                        />
                        <label>Role:</label>
                        <select name="role" value={formData.role} onChange={handleChange}>
                            <option value="STUDENT">Student</option>
                            <option value="INSTRUCTOR">Instructor</option>
                            <option value="ADMIN">Admin</option>
                        </select>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
