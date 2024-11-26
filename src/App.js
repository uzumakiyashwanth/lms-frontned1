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
import ManageCourses from "./pages/ManageCourses";
import AdminNavbar from "./components/AdminNavbar";
import AdminviewInstructors from "./pages/AdminviewInstructors";
import ContactForm from "./pages/ContactForm";

import PrivateRoute from "./pages/PrivateRoute"; // Ensure correct import path
import StudentRegisterForCourse from "./pages/StudentRegisterForCourse";
import DeveloperProfilesPage from "./pages/DeveloperProfilesPage";
import StudentMyProfile from "./pages/StudentMyProfile";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/blog" element={<BlogResources />} />
                <Route path="/Our-team" element={<DeveloperProfilesPage />} />
               
                {/* Protected Routes */}
                <Route path="/student-dashboard" element={<PrivateRoute element={StudentDashboard} />} />
                <Route path="/student-register-course" element={<PrivateRoute element={StudentRegisterForCourse} />} />
                <Route path="/myprofile" element={<PrivateRoute element={StudentMyProfile}/>}/>

                <Route path="/admin-dashboard" element={<PrivateRoute element={AdminDashboard} />} />
                <Route path="/admin-view-instructors" element={<PrivateRoute element={AdminviewInstructors} />} />
                <Route path="/instructor-dashboard" element={<PrivateRoute element={InstructorDashboard} />} />
                <Route path="/admin-view-students" element={<PrivateRoute element={AdminViewStudents} />} />
                <Route path="/admin-manage-courses" element={<PrivateRoute element={ManageCourses} />} /> 
                <Route path="/admin-navbar" element={<PrivateRoute element={AdminNavbar} />} />
                
                {/* Public Routes */}
                <Route path="/contact-us" element={<ContactForm />} />
               
            </Routes>
        </Router>
    );
};

export default App;
