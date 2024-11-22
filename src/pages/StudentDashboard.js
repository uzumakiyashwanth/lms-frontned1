import React from "react";
import StudentNavbar from "../components/StudentNavbar";

const StudentDashboard = () => {
    const userName = localStorage.getItem("userName");

    return (
        <div style={styles.dashboardContainer}>
            <StudentNavbar />
            <div style={styles.contentContainer}>
                <h1 style={styles.welcomeText}>Welcome, {userName}!</h1>
                <p style={styles.aboutLMS}>
                    Our Learning Management System (LMS) is designed to empower students by providing
                    a platform to explore, enroll, and manage courses. With easy navigation, students
                    can access course content, track progress, and interact with instructors. Your
                    learning journey starts here!
                </p>

                <p style={styles.features}>
                    <strong>What you can do:</strong>
                    <ul style={styles.featureList}>
                        <li>Enroll in a wide range of courses.</li>
                        <li>Track your learning progress.</li>
                        <li>Interact with instructors and peers.</li>
                        <li>Access resources and assignments seamlessly.</li>
                    </ul>
                </p>

                <div style={styles.instructorSection}>
                    <h2 style={styles.sectionHeader}>Meet Our Instructors</h2>
                    <p style={styles.instructorText}>
                        Our experienced instructors are here to guide you through every step of your learning journey.
                        With expert knowledge in their fields, they provide high-quality teaching and are always available to
                        support you.
                    </p>
                    <div style={styles.instructorCards}>
                        
                        <div style={styles.instructorCard}>
                            <h3 style={styles.instructorName}>DR RM Balajee</h3>
                            <p style={styles.instructorRole}>Course Instructor - Web Development</p>
                            <p style={styles.instructorBio}>
                                Prof. RM Balajee specializes in web development and is passionate about teaching the next generation
                                of developers. With a Ph.D. in Computer Science, she brings cutting-edge knowledge to her courses.
                            </p>
                        </div>
                    </div>
                </div>

                <div style={styles.videoSection}>
                    <h2 style={styles.sectionHeader}>Sample Videos</h2>
                    <p style={styles.videoText}>
                        Get a glimpse of our interactive courses through sample videos. Our video content is designed to help
                        you understand complex concepts in an engaging and easy-to-follow way.
                    </p>
                    <div style={styles.videoCards}>
                        <div style={styles.videoCard}>
                            <h3 style={styles.videoTitle}>Introduction to Data Science</h3>
                            <iframe
                                style={styles.videoIframe}
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/ua-CiDNNj30?si=VFxNLgnYASg9w4ax"
                                title="YouTube video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div style={styles.videoCard}>
                            <h3 style={styles.videoTitle}>Getting Started with React</h3>
                            <iframe
                                style={styles.videoIframe}
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/SqcY0GlETPk?si=LejMrc0L4DueMB8E"
                                title="YouTube video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/*
https://www.youtube.com/embed/SqcY0GlETPk?si=LejMrc0L4DueMB8E
<iframe width="560" height="315" src="https://www.youtube.com/embed/ua-CiDNNj30?si=VFxNLgnYASg9w4ax" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

*/

const styles = {
    dashboardContainer: {
        fontFamily: "'Arial', sans-serif",
        minHeight: "100vh",
       // Deep blue background
        color: "#fff", // White text for contrast against dark blue
        padding: "20px",
        textAlign: "center",
    },
    contentContainer: {
        margin: "0 auto",
        maxWidth: "900px",
    },
    welcomeText: {
        fontSize: "2.5em",
        color: "#FFFB00", // Yellow text for the welcome message
        fontWeight: "600",
    },
    aboutLMS: {
        fontSize: "1.2em",
        marginTop: "20px",
        color: "#e0e0e0", // Lighter grey text for descriptions
    },
    features: {
        fontSize: "1.1em",
        marginTop: "20px",
        color: "#e0e0e0", // Lighter grey text for feature descriptions
    },
    featureList: {
        textAlign: "left",
        paddingLeft: "20px",
    },
    instructorSection: {
        marginTop: "40px",
    },
    sectionHeader: {
        fontSize: "2em",
        color: "#FFFB00", // Yellow header for section titles
        fontWeight: "600",
    },
    instructorText: {
        fontSize: "1.2em",
        color: "#e0e0e0", // Lighter grey text for instructor section
    },
    instructorCards: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        marginTop: "20px",
    },
    instructorCard: {
        backgroundColor: "#2B4D99", // Slightly lighter blue for cards
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    instructorName: {
        fontSize: "1.5em",
        color: "#FFFB00", // Yellow text for instructor names
        fontWeight: "bold",
    },
    instructorRole: {
        fontSize: "1.1em",
        color: "#FFD700", // Gold text for the instructor role
    },
    instructorBio: {
        fontSize: "1em",
        color: "#e0e0e0", // Lighter grey text for instructor bios
    },
    videoSection: {
        marginTop: "40px",
    },
    videoText: {
        fontSize: "1.2em",
        color: "#e0e0e0", // Lighter grey text for video descriptions
    },
    videoCards: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
        gap: "20px",
        marginTop: "20px",
    },
    videoCard: {
        backgroundColor: "#2B4D99", // Slightly lighter blue for cards
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    videoTitle: {
        fontSize: "1.5em",
        color: "#FFFB00", // Yellow text for video titles
        marginBottom: "10px",
    },
    videoIframe: {
        borderRadius: "10px",
    },
};

export default StudentDashboard;
