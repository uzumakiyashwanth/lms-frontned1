import React, { useState } from "react";
import axios from "axios";
import '../Page.css';
import MainNavbar from "../components/MainNavbar";


const Register = () => {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        password: "",
    });
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

  

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sending registration data:", formData);
    
        try {
            const response = await axios.post("http://localhost:8082/api/register", formData);
            console.log("Registration response:", response.data);
            setSuccessMessage(response.data);
            setErrorMessage("");
        } catch (error) {
            console.error("Registration error:", error);
            setErrorMessage(error.response ? error.response.data : "Registration error");
            setSuccessMessage("");
        }
    };

    return (
        <div>
            <MainNavbar />
            <div className="form-container">
                <h2>Register</h2>
                {successMessage && <div className="success-message">{successMessage}</div>}
                {errorMessage && <div className="error-message">{errorMessage}</div>}
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
