import React, { useState } from 'react';
import axios from 'axios';
import './SignIn.css';

export default function SignInPopup(auth) {
    
    const [isOpen, setIsOpen] = useState(false);
    const openPopup = () => {
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        const mail = e.target.elements.mail.value;
        const password = e.target.elements.password.value;
        try {
            const response =await axios.post('http://localhost/RentAway/LogIn.php', { mail,password });
            console.log('Response data:', response.data);
            // Check if response indicates successful login
            if (response && response.success) {
                console.log('Login successful');
                // Handle successful login
            } else {
                console.error('Login failed:', response.message);
                // Handle failed login
            }
        } catch (error) {
            console.error('Axios request error:', error);
            // Handle error
        }
      };

    return (
        <div>
            <button onClick={openPopup} className='in'>Sign In</button>
            {auth && isOpen && (
                <div className="popup">
                    <h2>Sign In</h2>
                    <form method="POST" onSubmit={handleLogin}>
                        <input type="text" name="mail" placeholder="Email" className="form-input" />
                        <input type="password" name="password" placeholder="Password" className="form-input" />
                        <button type="submit" className="form-submit">Sign In</button>
                        <button onClick={closePopup}>Close</button>
                    </form>
                        
                    
                </div>
            )}
        </div>
    );
}

