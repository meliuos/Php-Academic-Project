import React, { useState } from 'react';
import axios from 'axios';  // Import axios
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

        try {
            // Make an API call to register the user
            const response = await axios.post('signUp.php', { email, password });

            if (response.data.message) {
                alert(response.data.message);
                closePopup();
            } else if (response.data.error) {
                setErrorMessage(response.data.error);
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                setErrorMessage(error.response.data.error);
            } else {
                setErrorMessage('An error occurred while registering');
            }
        }
    };

    return (
        <div>
            <button onClick={handleSignupClick} className="up">Sign Up</button>
            {showForm && (
                <div className="popup">
                    <form onSubmit={handleFormSubmit}>
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
