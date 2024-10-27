import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import InstructorDashboard from "./pages/InstructorDashboard";
import BlogResources from "./pages/BlogResources";
import AdminViewStudents from "./pages/Adminviewstudents";

 // Ensure the path is correct

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/blog" element={<BlogResources />} />
                <Route path="/student-dashboard" element={<StudentDashboard />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
                <Route path="/admin-view-students" element={<AdminViewStudents />} />
            </Routes>
        </Router>
    );
};

export default App;
