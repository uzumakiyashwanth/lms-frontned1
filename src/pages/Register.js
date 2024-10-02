import React, { useState } from "react";
import axios from "axios"; // Import Axios
import '../Page.css';
import MainNavbar from "../components/MainNavbar";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        password: "",
    });
    const [successMessage, setSuccessMessage] = useState(""); // State for success message
    const [errorMessage, setErrorMessage] = useState(""); // State for error message

    const navigate = useNavigate(); // To navigate after successful registration

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sending registration data:", formData); // Log data being sent
    
        try {
            const response = await axios.post("http://localhost:8082/api/register", formData);
            console.log("Registration response:", response.data); // Log response data
            setSuccessMessage(response.data);
            setErrorMessage("");
        } catch (error) {
            console.error("Registration error:", error); // Log error details
            setErrorMessage(error.response ? error.response.data : "Registration error");
            setSuccessMessage("");
        }
    };
    

    return (
        <div>
            <MainNavbar />
            <div className="form-container">
                <h2>Register</h2>
                {successMessage && <div className="success-message">{successMessage}</div>} {/* Display success message */}
                {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}
                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />

                    <label>Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />

                    <label>New Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />

                    <button type="submit">Register</button>
                </form>  
            </div>
        </div>
    );
};

export default Register;
