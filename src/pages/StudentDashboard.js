import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentNavbar from '../components/StudentNavbar';

const StudentDashboard = () => {
    const [courses, setCourses] = useState([]);
    const userName = localStorage.getItem("userName");

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
        <div style={styles.dashboardContainer}>
            <StudentNavbar />
            <div style={styles.header}>
                <h1 style={styles.welcomeText}>Welcome, {userName}!</h1>
                <p style={styles.subtitle}>Explore and enroll in available courses</p>
            </div>
            <div style={styles.coursesContainer}>
                {courses.map((course, index) => (
                    <div style={styles.courseCard} key={index}>
                        <h3 style={styles.courseTitle}>{course.title}</h3>
                        <p style={styles.courseDescription}>{course.description}</p>
                        <button style={styles.enrollButton}>Enroll</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    dashboardContainer: {
        fontFamily: "'Arial', sans-serif",
        
        minHeight: "100vh",
        padding: "20px",
        textAlign: "center",
    },
    header: {
        marginBottom: "40px",
    },
    welcomeText: {
        fontSize: "2.5em",
        color: "#4a90e2",
        fontWeight: "600",
    },
    subtitle: {
        fontSize: "1.2em",
        color: "#555",
    },
    coursesContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px",
    },
    courseCard: {
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s, box-shadow 0.3s",
    },
    courseCardHover: {
        transform: "scale(1.05)",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
    },
    courseTitle: {
        fontSize: "1.5em",
        color: "#333",
        margin: "0 0 10px",
    },
    courseDescription: {
        fontSize: "1em",
        color: "#666",
        marginBottom: "20px",
    },
    enrollButton: {
        padding: "10px 20px",
        borderRadius: "5px",
        backgroundColor: "#4a90e2",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
        transition: "background-color 0.3s",
    },
    enrollButtonHover: {
        backgroundColor: "#357ab8",
    },
};

export default StudentDashboard;
