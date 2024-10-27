import React, { useState, useEffect } from "react";
import AdminNavbar from "../components/AdminNavbar";
import axios from "axios";

const AdminDashboard = () => {
    const [course, setCourse] = useState({ title: '', description: '', content: '' });
    const [courses, setCourses] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [currentCourseId, setCurrentCourseId] = useState(null);
    const [notification, setNotification] = useState({ message: '', type: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse({ ...course, [name]: value });
    };

    const handleAddCourse = async () => {
        if (!course.title || !course.description || !course.content) {
            setNotification({ message: 'All fields are required!', type: 'error' });
            return;
        }
        try {
            await axios.post('http://localhost:8080/api/courses', course);
            fetchCourses();
            resetForm();
            setNotification({ message: 'Course added successfully!', type: 'success' });
        } catch (error) {
            console.error("Error adding course:", error);
            setNotification({ message: 'Error adding course!', type: 'error' });
        }
    };

    const fetchCourses = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/courses');
            setCourses(response.data);
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    const handleEditCourse = (course) => {
        setCourse({ title: course.title, description: course.description, content: course.content });
        setCurrentCourseId(course.id);
        setEditMode(true);
    };

    const handleUpdateCourse = async () => {
        if (!course.title || !course.description || !course.content) {
            setNotification({ message: 'All fields are required!', type: 'error' });
            return;
        }
        try {
            await axios.put(`http://localhost:8080/api/courses/${currentCourseId}`, course);
            fetchCourses();
            resetForm();
            setNotification({ message: 'Course updated successfully!', type: 'success' });
        } catch (error) {
            console.error("Error updating course:", error);
            setNotification({ message: 'Error updating course!', type: 'error' });
        }
    };

    const handleDeleteCourse = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/courses/${id}`);
            fetchCourses();
            setNotification({ message: 'Course deleted successfully!', type: 'success' });
        } catch (error) {
            console.error("Error deleting course:", error);
            setNotification({ message: 'Error deleting course!', type: 'error' });
        }
    };

    const resetForm = () => {
        setCourse({ title: '', description: '', content: '' });
        setEditMode(false);
        setCurrentCourseId(null);
        setNotification({ message: '', type: '' });
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <div>
            <AdminNavbar />
            <h1>Welcome to Admin Dashboard</h1>

            <div style={styles.container}>
                <h2>{editMode ? 'Update Course' : 'Add Course'}</h2>
                <input
                    style={styles.input}
                    type="text"
                    name="title"
                    placeholder="Course Title"
                    value={course.title}
                    onChange={handleChange}
                />
                <textarea
                    style={styles.textarea}
                    name="description"
                    placeholder="Course Description"
                    value={course.description}
                    onChange={handleChange}
                />
                <textarea
                    style={styles.textarea}
                    name="content"
                    placeholder="Course Content"
                    value={course.content}
                    onChange={handleChange}
                />
                {editMode ? (
                    <button style={styles.button} onClick={handleUpdateCourse}>Update Course</button>
                ) : (
                    <button style={styles.button} onClick={handleAddCourse}>Add Course</button>
                )}
                
                {notification.message && (
                    <div style={{ ...styles.notification, backgroundColor: notification.type === 'success' ? 'lightgreen' : 'lightcoral' }}>
                        {notification.message}
                    </div>
                )}

                <h2>Current Courses</h2>
                <ul style={styles.courseList}>
                    {courses.map((c) => (
                        <li key={c.id} style={styles.courseItem}>
                            <h3>{c.title}</h3>
                            <p>{c.description}</p>
                            <button onClick={() => handleEditCourse(c)}>Edit</button>
                            <button onClick={() => handleDeleteCourse(c.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
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
    input: {
        margin: '5px',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
        display: 'block',
    },
    textarea: {
        margin: '5px',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
        display: 'block',
        height: '80px',
    },
    button: {
        margin: '10px 0',
        padding: '10px 15px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#28a745',
        color: 'white',
        cursor: 'pointer',
    },
    notification: {
        padding: '10px',
        margin: '10px 0',
        borderRadius: '4px',
    },
    courseList: {
        listStyleType: 'none',
        padding: '0',
    },
    courseItem: {
        padding: '10px',
        margin: '5px 0',
        backgroundColor: '#fff',
        borderRadius: '4px',
        border: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default AdminDashboard;
