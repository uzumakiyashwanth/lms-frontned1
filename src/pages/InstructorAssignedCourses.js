import React, { useEffect, useState } from "react";
import axios from "axios";
import InstructorNavbar from "../components/InstructorNavbar";

const InstructorAssignedCourses = () => {
  const [assignedCourses, setAssignedCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courseStudents, setCourseStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAssignedCourses();
  }, []);

  const fetchAssignedCourses = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8080/api/assigned-courses");
      setAssignedCourses(response.data);
    } catch (error) {
      setError("Failed to fetch assigned courses.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCourseStudents = async (courseId) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8080/api/assigned-courses/${courseId}`);
      setCourseStudents(response.data);
    } catch (error) {
      setError("Failed to fetch course students.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    fetchCourseStudents(course.id);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <InstructorNavbar />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2 style={{ color: "white" }}>Assigned Courses</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading && <p>Loading...</p>}

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
          {/* Assigned Courses */}
          <div style={{ width: "45%", backgroundColor: "#fff", padding: "20px", borderRadius: "8px" }}>
            <h3>Courses</h3>
            {assignedCourses.length === 0 ? (
              <p>No courses assigned.</p>
            ) : (
              <ul style={{ listStyle: "none", padding: 0 }}>
                {assignedCourses.map((course) => (
                  <li
                    key={course.id}
                    style={{
                      padding: "10px",
                      margin: "10px 0",
                      backgroundColor: selectedCourse?.id === course.id ? "#d3d3d3" : "#f0f0f0",
                      borderRadius: "4px",
                      cursor: "pointer",
                      border: selectedCourse?.id === course.id ? "2px solid blue" : "none",
                    }}
                    onClick={() => handleCourseClick(course)}
                  >
                    {course.courseName} (Code: {course.courseCode})
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Course Students */}
          <div style={{ width: "45%", backgroundColor: "#fff", padding: "20px", borderRadius: "8px" }}>
            <h3>
              {selectedCourse ? `${selectedCourse.courseName} Students` : "Select a Course"}
            </h3>
            {courseStudents.length === 0 ? (
              <p>No students assigned to this course.</p>
            ) : (
              <ul style={{ listStyle: "none", padding: 0 }}>
                {courseStudents.map((student) => (
                  <li
                    key={student.id}
                    style={{
                      padding: "10px",
                      margin: "10px 0",
                      backgroundColor: "#f0f0f0",
                      borderRadius: "4px",
                    }}
                  >
                    {student.name} (ID: {student.id})
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorAssignedCourses;
