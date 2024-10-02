import React, { useState, useEffect } from "react";
import MainNavbar from "../components/MainNavbar";
import './HomePage.css'; // Assuming this file contains the necessary CSS for styling
import image from '../images/image.png'; // Update this path to your image location

const HomePage = () => {
    const [role, setRole] = useState('guest'); // Default role

    useEffect(() => {
        // Fetch user role (this can be obtained from localStorage or server session)
        const userRole = localStorage.getItem('role') || 'guest';
        setRole(userRole);
    }, []);

    const staticCourses = [
        {
            id: 1,
            title: 'React Basics',
            description: 'Learn the fundamentals of React and build your first web app.',
            url: 'https://www.youtube.com/embed/w7ejDZ8SWv8' // Changed to embed URL
        },
        {
            id: 2,
            title: 'Spring Boot Essentials',
            description: 'Master the essentials of Spring Boot and create powerful backend services.',
            url: 'https://www.youtube.com/embed/35EQXmHKZYs' // Changed to embed URL
        },
        {
            id: 3,
            title: 'MySQL Database Management',
            description: 'Understand database fundamentals and manage data effectively with MySQL.',
            url: 'https://www.youtube.com/embed/7S_tz1z_5bA' // Changed to embed URL
        },
        {
            id: 4,
            title: 'JavaScript ES6 Features',
            description: 'Dive deep into modern JavaScript and learn the latest features from ES6 and beyond.',
            url: 'https://www.youtube.com/embed/NCwa_xi0Uuc' // Changed to embed URL
        },
        {
            id: 5,
            title: 'Docker Basics',
            description: 'Learn how to containerize applications using Docker, an essential DevOps tool.',
            url: 'https://www.youtube.com/embed/fqMOX6JJhGo' // Changed to embed URL
        },
    ];

    return (
        <div>
            <MainNavbar />
            <div className="hero-section">
                <div className="hero-text">
                    <h1>Welcome to the Learning Management System</h1>
                    <p>Your gateway to an advanced learning experience. Manage courses, track progress, and more!</p>
                    <a href="/register" className="cta-button">Get Started</a>
                </div>
                <div className="hero-image">
                    <img src={image} alt="LMS Hero" /> {/* Use the imported image */}
                </div>
            </div>

            {/* Features Section */}
            <div className="features-section">
                <h2>Why Choose Our LMS?</h2>
                <div className="features">
                    <div className="feature-card">
                        <h3>Interactive Learning</h3>
                        <p>Engage with interactive course content and quizzes that improve retention.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Real-time Analytics</h3>
                        <p>Track your learning progress and get insights into areas of improvement.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Role-based Access</h3>
                        <p>Admin, Instructor, Student, and Content Creator roles offer tailored dashboards and functionalities.</p>
                    </div>
                </div>
            </div>

            {/* Course Cards Section */}
            <div className="course-cards-section">
                <h2>Explore Our Courses</h2>
                <div className="course-cards">
                    {staticCourses.map(course => (
                        <div className="course-card" key={course.id}>
                            <h3>{course.title}</h3>
                            <iframe
                                width="560"
                                height="315"
                                src={course.url}
                                title={course.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <p>{course.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="testimonials-section">
                <h2>What Our Users Say</h2>
                <div className="testimonials">
                    <div className="testimonial">
                        <p>"The LMS has helped me track my progress and manage my learning much better!"</p>
                        <h4>- Jane Doe, Student</h4>
                    </div>
                    <div className="testimonial">
                        <p>"Creating courses and interacting with students has never been easier!"</p>
                        <h4>- John Smith, Instructor</h4>
                    </div>
                </div>
            </div>

            {/* Role-specific content */}
            <div className="role-section">
                {role === 'admin' && (
                    <div className="admin-dashboard">
                        <h2>Admin Dashboard</h2>
                        <p>Manage users, courses, and platform settings.</p>
                        <a href="/admin">Go to Admin Panel</a>
                    </div>
                )}

                {role === 'instructor' && (
                    <div className="instructor-dashboard">
                        <h2>Instructor Dashboard</h2>
                        <p>Create and manage your courses, and grade student assignments.</p>
                        <a href="/instructor">Go to Instructor Panel</a>
                    </div>
                )}

                {role === 'student' && (
                    <div className="student-dashboard">
                        <h2>Student Dashboard</h2>
                        <p>Enroll in courses, track your progress, and submit assignments.</p>
                        <a href="/student">Go to Student Dashboard</a>
                    </div>
                )}

                {role === 'content-creator' && (
                    <div className="content-creator-dashboard">
                        <h2>Content Creator Dashboard</h2>
                        <p>Create educational materials and update course content.</p>
                        <a href="/content-creator">Go to Content Creator Panel</a>
                    </div>
                )}

                {role === 'guest' && (
                    <div className="guest-info">
                        <p>Please <a href="/login">log in</a> to access your dashboard.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;
