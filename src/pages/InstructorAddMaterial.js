import React, { useState } from 'react';
import axios from 'axios';
import './InstructorAddMaterial.css';
import InstructorNavbar from '../components/InstructorNavbar';

const InstructorAddMaterial = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:8080/materials', formData);
            setSuccess(response.data.message);
            setTitle('');
            setDescription('');
            setFile(null);
        } catch (error) {
            console.error('Error uploading material:', error);
        }
    };

    return (
        <div>
            <InstructorNavbar/>
        <div className="instructor-add-material">
            <h2>Upload Course Material</h2>
            <form onSubmit={handleSubmit} className="upload-form">
                <input
                    type="text"
                    placeholder="Material Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    required
                />
                <button type="submit">Upload</button>
            </form>
            {success && <p className="success">{success}</p>}
        </div>
        </div>
    );
};

export default InstructorAddMaterial;
