import React from "react";
import "./Users.css";
import { useState, useEffect } from "react";

export default function Admins() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
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
            }
            else if(data.error){
                alert("Error adding admin");
            }
            else {
                alert("Admin already exists");
                setFormData({
                    email: '',
                    password: ''
                });
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
            </form>
            {}
        </div>
    );
}