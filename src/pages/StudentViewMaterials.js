import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StudentViewMaterials.css';
import StudentNavbar from '../components/StudentNavbar';

const StudentViewMaterials = () => {
    const [materials, setMaterials] = useState([]);
    const [previewMaterial, setPreviewMaterial] = useState(null);

    useEffect(() => {
        axios.get('https://lms-backend-production-8431.up.railway.app/materials')
            .then((response) => setMaterials(response.data))
            .catch((error) => console.error('Error fetching materials:', error));
    }, []);

    const handlePreview = (fileName) => {
        const url = `https://lms-backend-production-8431.up.railway.app/files/${fileName}`;
        setPreviewMaterial(url);
    };

    const handleClosePreview = () => {
        setPreviewMaterial(null);
    };

    return (
        <div>
            <StudentNavbar />
            <div className="student-view-materials">
                <h2>Available Course Materials</h2>
                <div className="materials-list">
                    {materials.map((material) => (
                        <div key={material.id} className="material-card">
                            <h3>{material.title}</h3>
                            <p>{material.description}</p>
                            <div className="buttons">
                                <button onClick={() => handlePreview(material.fileName)} className="view-button">
                                    View
                                </button>
                                <a
                                    href={`https://lms-backend-production-8431.up.railway.app/files/${material.fileName}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download
                                    className="download-button"
                                >
                                    Download
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                {previewMaterial && (
                    <div className="preview-overlay">
                        <div className="preview-container">
                            <button className="close-preview" onClick={handleClosePreview}>
                                &times;
                            </button>
                            <iframe src={previewMaterial} title="PDF Preview" className="preview-iframe" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudentViewMaterials;
