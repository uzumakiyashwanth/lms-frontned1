import React, { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import axios from 'axios';

const AdminDashboard = () => {
    const [counts, setCounts] = useState({
        students: 0,
        instructors: 0,
        courses: 0
    });

    // Fetch total counts of students, instructors, and courses
    const fetchCounts = async () => {
        try {
            const studentsResponse = await axios.get('http://localhost:8080/students/count');
            const instructorsResponse = await axios.get('http://localhost:8080/instructors/count');
            const coursesResponse = await axios.get('http://localhost:8080/courses/count');
    
            console.log("Students count:", studentsResponse.data);
            console.log("Instructors count:", instructorsResponse.data);
            console.log("Courses count:", coursesResponse.data);
    
            setCounts({
                students: studentsResponse.data,
                instructors: instructorsResponse.data,
                courses: coursesResponse.data
            });
        } catch (error) {
            console.error("Error fetching counts:", error);
        }
    };
    
    useEffect(() => {
        fetchCounts();
    }, []);

    return (
        <div>
            <AdminNavbar />
           <center><h1>Welcome to Admin Dashboard</h1></center> 
            <div style={styles.container}>
                <h2 style={{color:'black'}}>Admin Overview</h2>

                <div style={styles.countContainer}>
                    <div style={styles.countCircle}>
                        <h3>{counts.students}</h3>
                        <p>Students</p>
                    </div>
                    <div style={styles.countCircle}>
                        <h3>{counts.instructors}</h3>
                        <p>Instructors</p>
                    </div>
                    <div style={styles.countCircle}>
                        <h3>{counts.courses}</h3>
                        <p>Courses </p>
                    </div>
                </div>

                <center>
                    <Link to="/admin-manage-courses" style={styles.link}>Course Management</Link>
                </center>
                <br />
                <center>
                    <Link to="/admin-view-students" style={styles.link}>Student Registration</Link>
                </center>
                <br />
                <center>
                    <Link to="/admin-view-instructors" style={styles.link}>Instructor Registration</Link>
                </center>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        margin: '20px',
    },
    link: {
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '4px',
        marginTop: '20px',
    },
    countContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: '20px 0',
    },
    countCircle: {
        backgroundColor: 'black',
        borderRadius: '50%',
        width: '120px',
        height: '120px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
};

export default AdminDashboard;
