import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPopup from './LoginPopup.jsx';

export default function PostAuth({onLoginSuccess}) {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showSignInPopup, setShowSignInPopup] = useState(false);

    const handleRent = () => {
        if (isLoggedIn) {
            onLoginSuccess();
            navigate('/post');
        } else {
            setShowSignInPopup(true); // Show the login popup
        }
    }

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setShowSignInPopup(false);
        onLoginSuccess();
        navigate('/post');
    };

    return (
        <div>
            <button onClick={handleRent}>
                Rent your house
            </button>
            <LoginPopup isOpen={!isLoggedIn && showSignInPopup} onLoginSuccess={handleLoginSuccess} />
        </div>
    )
}
