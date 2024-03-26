import React, { useState } from 'react';
import './Signup.css'; 

export default function Signup() {
    const [showForm, setShowForm] = useState(false);

    const handleSignupClick = () => {
        setShowForm(true);
    };
    const closePopup = () => {
        setShowForm(false);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        // You can access form data using e.target.elements
        // For example: const email = e.target.elements.email.value;
        // Once the form is submitted, you can close the form by setting setShowForm(false)
    };

    return (
        <div>
            <button onClick={handleSignupClick} className="up">Sign Up</button>
            {showForm && (
                <div className="popup">
                    <form onSubmit={handleFormSubmit}>
                        <h2>Sing Up</h2>
                        <input type="text" name="email" placeholder="Email" className="form-input" />
                        <input type="password" name="password" placeholder="Password" className="form-input" />
                        <button type="submit" className="form-submit">Submit</button>
                        <button onClick={closePopup}>Close</button>
                    </form>
                </div>
            )}
        </div>
    );
}
