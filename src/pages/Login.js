import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";
import "../cssfiles/Login.css";
import { ToastContainer, toast } from 'react-toastify';  // Import Toastify components
import 'react-toastify/dist/ReactToastify.css';  // Import Toastify CSS

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);  // Log the form data to debug
        
        try {
            const testCredentials = {
                ADMIN: { email: "admin@example.com", password: "admin123" },
                INSTRUCTOR: { email: "instructor@example.com", password: "instructor123" },
                STUDENT: { email: "student@example.com", password: "student123" },
            };

            const { email, password, role } = formData;

            if (
                testCredentials[role].email === email &&
                testCredentials[role].password === password
            ) {
                localStorage.setItem("role", role);  // Store the role in localStorage
                console.log("Redirecting to", role);  // Log the redirection

                // Show success toast
                toast.success(`Welcome, ${role}! Redirecting...`, {
                    position: "top-right",  // Use the string for position
                    autoClose: 3000,
                });

                // Redirect based on role
                if (role === "STUDENT") {
                    navigate("/student-dashboard");
                } else if (role === "INSTRUCTOR") {
                    navigate("/instructor-dashboard");
                } else if (role === "ADMIN") {
                    navigate("/admin-dashboard");
                }
            } else {
                toast.error("Invalid credentials", {
                    position: "top-right",  // Use the string for position
                    autoClose: 3000,
                });
            }
        } catch (error) {
            toast.error("Error occurred during login", {
                position: "top-right",  // Use the string for position
                autoClose: 3000,
            });
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
            {/* Toast Container to display toasts */}
            <ToastContainer />
        </div>
    );
};

export default Login;
