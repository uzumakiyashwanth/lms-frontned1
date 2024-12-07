import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentYourMaterial = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/materials");
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
                        src={`http://localhost:8080/videos/${videoUrl}`}
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
                      src={`http://localhost:8080/pdfs/${pdfUrl}`}
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
