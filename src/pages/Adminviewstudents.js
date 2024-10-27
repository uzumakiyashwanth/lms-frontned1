import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../components/AdminNavbar';

const AdminViewStudents = () => {
    const [students, setStudents] = useState([]);
    const [newStudent, setNewStudent] = useState({ name: '', email: '', password: '' });
    const [editStudent, setEditStudent] = useState({ id: '', name: '', email: '', password: '' });

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await axios.get('http://localhost:8080/getregisterationdata');
            setStudents(response.data);
        } catch (error) {
            console.error("Error fetching registration data:", error);
        }
    };

    const handleAddStudent = async () => {
        try {
            await axios.post('http://localhost:8080/registernew', newStudent);
            fetchStudents(); 
            setNewStudent({ name: '', email: '', password: '' }); // Reset form
        } catch (error) {
            console.error("Error adding student:", error);
        }
    };

    const handleEditStudent = async (student) => {
        setEditStudent(student);
    };

    const handleUpdateStudent = async () => {
        try {
            await axios.put(`http://localhost:8080/updateuser/${editStudent.id}`, editStudent);
            fetchStudents(); 
            setEditStudent({ id: '', name: '', email: '', password: '' }); 
        } catch (error) {
            console.error("Error updating student:", error);
        }
    };

    const handleDeleteStudent = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/deleteuser/${id}`);
            fetchStudents(); 
        } catch (error) {
            console.error("Error deleting student:", error);
        }
    };

    return (
        <div>
            <AdminNavbar />
            <div style={styles.container}>
                <h2 style={styles.header}>Registered Students</h2>

             
                <div style={styles.formContainer}>
                    <h3>Add Student</h3>
                    <input
                        style={styles.input}
                        type="text"
                        placeholder="Name"
                        value={newStudent.name}
                        onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                    />
                    <input
                        style={styles.input}
                        type="email"
                        placeholder="Email"
                        value={newStudent.email}
                        onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                    />
                    <input
                        style={styles.input}
                        type="password"
                        placeholder="Password"
                        value={newStudent.password}
                        onChange={(e) => setNewStudent({ ...newStudent, password: e.target.value })}
                    />
                    <button style={styles.button} onClick={handleAddStudent}>Add</button>
                </div>

                {/* Edit Student Form */}
                {editStudent.id && (
                    <div style={styles.formContainer}>
                        <h3>Edit Student</h3>
                        <input
                            style={styles.input}
                            type="text"
                            placeholder="Name"
                            value={editStudent.name}
                            onChange={(e) => setEditStudent({ ...editStudent, name: e.target.value })}
                        />
                        <input
                            style={styles.input}
                            type="email"
                            placeholder="Email"
                            value={editStudent.email}
                            onChange={(e) => setEditStudent({ ...editStudent, email: e.target.value })}
                        />
                        <input
                            style={styles.input}
                            type="password"
                            placeholder="Password"
                            value={editStudent.password}
                            onChange={(e) => setEditStudent({ ...editStudent, password: e.target.value })}
                        />
                        <button style={styles.button} onClick={handleUpdateStudent}>Update</button>
                    </div>
                )}

                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.tableCell}>Name</th>
                            <th style={styles.tableCell}>Email</th>
                            <th style={styles.tableCell}>Password</th>
                            <th style={styles.tableCell}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.id}>
                                <td style={styles.tableCell}>{student.name}</td>
                                <td style={styles.tableCell}>{student.email}</td>
                                <td style={styles.tableCell}>{student.password}</td>
                                <td style={styles.tableCell}>
                                    <button style={styles.actionButton} onClick={() => handleEditStudent(student)}>Edit</button>
                                    <button style={styles.actionButton} onClick={() => handleDeleteStudent(student.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#000', 
        color: 'white', 
        padding: '20px',
        borderRadius: '8px',
        margin: '20px',
    },
    header: {
        textAlign: 'center',
        color: 'white',
    },
    formContainer: {
        marginTop: '20px',
        marginBottom: '20px',
    },
    input: {
        margin: '5px',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #fff',
        width: '200px',
    },
    button: {
        margin: '5px',
        padding: '10px 15px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#28a745', // Green background for add/update buttons
        color: 'white',
        cursor: 'pointer',
    },
    actionButton: {
        margin: '5px',
        padding: '8px 12px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#dc3545', // Red background for delete button
        color: 'white',
        cursor: 'pointer',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
    },
    tableCell: {
        border: '1px solid #fff',
        padding: '8px',
        textAlign: 'left',
    },
};

export default AdminViewStudents; // Export the component
