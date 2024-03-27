import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

export default function Signup() {
    const [showForm, setShowForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignupClick = () => {
        setShowForm(true);
    };

    const closePopup = () => {
        setShowForm(false);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        // Basic client-side validation
        if (!email || !password) {
            setErrorMessage('Please fill out all fields');
            return;
        }

        try {
            const response = await axios.post('http://localhost/RentAway/SignUp.php', 
            { email, password },
            { headers: { 'Content-Type': 'application/json' } } 
            );
            console.log(response.data);
            if (response.data.message) {
                alert(response.data.message);
                closePopup();
            } else if (response.data.error) {
                setErrorMessage(response.data.error);
            }
        } catch (error) {
            setErrorMessage('An error occurred while registering');
        }
    };

    return (
        <div>
            <button onClick={handleSignupClick} className="up">Sign Up</button>
            {showForm && (
                <div className="popup">
                    <form method='POST' action='http://localhost/RentAway/SignUp.php'>
                        <h2>Sign Up</h2>
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                        <input type="email" name="email" placeholder="Email" className="form-input" required />
                        <input type="password" name="password" placeholder="Password" className="form-input" required />
                        <button type="submit" className="form-submit">Submit</button>
                        <button type="button" onClick={closePopup}>Close</button>
                    </form>
                </div>
            )}
        </div>
    );
}
