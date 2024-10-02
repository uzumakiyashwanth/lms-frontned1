import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";
import '../Page.css';

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
                const response = { data: `Role: ${role}` };
                const userRole = response.data.split("Role: ")[1];

                if (userRole === "STUDENT") {
                    navigate("/student-dashboard");
                } else if (userRole === "INSTRUCTOR") {
                    navigate("/instructor-dashboard");
                } else if (userRole === "ADMIN") {
                    navigate("/admin-dashboard");
                }
            } else {
                alert("Invalid credentials");
            }
        } catch (error) {
            alert("Error occurred during login");
        }
    };

    return (
        <div>
            <MainNavbar />
            <div className="page-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
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
    );
};

export default Login;
