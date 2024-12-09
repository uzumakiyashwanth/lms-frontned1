import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentNavbar from "../components/StudentNavbar";

const StudentYourMaterial = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await axios.get("https://lms-backend-production-8431.up.railway.app/api/materials");
        setMaterials(response.data);
      } catch (error) {
        console.error("Error fetching materials:", error);
      }
    };

    fetchMaterials();
  }, []);

  return (
    <div>
        
      <h2>Your Course Materials</h2>
      {materials.length > 0 ? (
        materials.map((material) => (
          <div key={material.id}>
            <h3>{material.moduleName}</h3>
            <div>
              <h4>Videos:</h4>
              {material.videoUrls.length > 0 ? (
                material.videoUrls.map((videoUrl, index) => (
                  <div key={index}>
                    <video width="400" controls>
                      <source
                        src={`https://lms-backend-production-8431.up.railway.app/videos/${videoUrl}`}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))
              ) : (
                <p>No videos available for this module.</p>
              )}
            </div>
            <div>
              <h4>PDFs:</h4>
              {material.pdfUrls.length > 0 ? (
                material.pdfUrls.map((pdfUrl, index) => (
                  <div key={index}>
                    <embed
                      src={`https://lms-backend-production-8431.up.railway.app/pdfs/${pdfUrl}`}
                      type="application/pdf"
                      width="600"
                      height="400"
                    />
                  </div>
                ))
              ) : (
                <p>No PDFs available for this module.</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No course materials available.</p>
      )}
    </div>
  );
};

export default StudentYourMaterial;
