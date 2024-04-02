import React from "react";
import "./Users.css";
import { useState } from "react";

export default function Admins() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const resetForm = () => {  
        setFormData({
            email: '',
            password: ''
        });
    };
    const [response, setResponse] = useState(''); 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost/RentAway/addAdmin.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });            
            const data = await response.json();
            if(data.success){
                alert("Added an admin successfully");
                setResponse("");
                resetForm();
            }
            else if(data.error){
                setResponse("Error adding admin");
            }
            else {
                setResponse("Admin already exists");
            }
        } catch (error) {
            console.error('Error adding admin:', error);
        }
    };
    

    return (
        <div className="signup-form">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit">Sign Up</button>
                {response && (<p className="response">{response}</p>)}
            </form>    
        </div>
    );
}