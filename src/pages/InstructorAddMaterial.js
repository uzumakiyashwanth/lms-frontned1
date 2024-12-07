import React, { useState } from "react";
import axios from "axios";
import InstructorNavbar from "../components/InstructorNavbar";

const InstructorAddMaterial = () => {
  const [moduleName, setModuleName] = useState("");
  const [videoFiles, setVideoFiles] = useState([]);
  const [pdfFiles, setPdfFiles] = useState([]);

  const handleAddMaterial = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("moduleName", moduleName);

    // Append video files
    for (let video of videoFiles) {
      formData.append("videos", video);
    }

    // Append PDF files
    for (let pdf of pdfFiles) {
      formData.append("pdfs", pdf);
    }

    try {
      await axios.post("http://localhost:8080/api/materials/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Material added successfully!");
      setModuleName("");
      setVideoFiles([]);
      setPdfFiles([]);
    } catch (error) {
      console.error("Error adding material:", error);
    }
  };

  return (
    <div>
      <InstructorNavbar />
      <h2>Instructor Dashboard</h2>
      <form onSubmit={handleAddMaterial}>
        <input
          type="text"
          placeholder="Module Name"
          value={moduleName}
          onChange={(e) => setModuleName(e.target.value)}
          required
        />
        <input
          type="file"
          multiple
          accept="video/*"
          onChange={(e) => setVideoFiles(e.target.files)}
        />
        <input
          type="file"
          multiple
          accept="application/pdf"
          onChange={(e) => setPdfFiles(e.target.files)}
        />
        <button type="submit">Add Material</button>
      </form>
    </div>
  );
};

export default InstructorAddMaterial;
