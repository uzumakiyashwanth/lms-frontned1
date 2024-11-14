import React from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";

const AdminDashboard = () => {
    return (
        <div>
            <AdminNavbar />
            <h1>Welcome to Admin Dashboard</h1>
            <div style={styles.container}>
                <h2 style={{color:'black'}}>Admin Overview</h2>
               <center> <Link to="/admin-manage-courses" style={styles.link}>Course Management</Link></center>
                <br></br>
               <center> <Link to="/admin-view-students" style={styles.link}>Student Registration</Link></center>
               
                <br></br>
              <center>  <Link to="/admin-view-instructors" style={styles.link}>Instructor Registration</Link></center>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f4f4f4',
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
};

export default AdminDashboard;
