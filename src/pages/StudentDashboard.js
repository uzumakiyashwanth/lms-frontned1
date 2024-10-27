import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentNavbar from '../components/StudentNavbar';
import './StudentDashboard.css'; // Importing CSS file for styles

const StudentDashboard = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/courses');
            setCourses(response.data);
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    return (
        <div>
 <StudentNavbar />
        
        <div className="dashboard-container">
           
            <h1 className="dashboard-title">Student Dashboard</h1>
            <h2 className="courses-title">Available Courses</h2>
            <div className="courses-container">
                {courses.map((course, index) => (
                    <div className="course-card" key={index}>
                        <h3 className="course-title">{course.title}</h3>
                        <p className="course-description">{course.description}</p>
                        <button className="enroll-button">Enroll</button>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default StudentDashboard;
