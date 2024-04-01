import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPopup from './LoginPopup.jsx';

export default function PostAuth({ onLoginSuccess }) {
    const navigate = useNavigate();
    console.log(sessionStorage.getItem('user')["success"]);
    const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('user') && sessionStorage.getItem('user').success);
    const [showSignInPopup, setShowSignInPopup] = useState(sessionStorage.getItem('user') && !sessionStorage.getItem('user').success);
    const [loginAttempted, setLoginAttempted] = useState(false); 

    const handleRent = () => {
        if (isLoggedIn) {
            navigate('/post');
        } else {
            setLoginAttempted(true); 
            setShowSignInPopup(true);
        }
    }
    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setShowSignInPopup(false);
        onLoginSuccess();
        navigate('/post');  
    };

    const handleLoginCancel = () => {
        setShowSignInPopup(false);
    };
    useEffect(() => {
        if (isLoggedIn) {
            setShowSignInPopup(false);
        }
    },[isLoggedIn]);
    return (
        <div>
            <button onClick={handleRent}>
                Rent your house
            </button>
            <LoginPopup isOpen={!isLoggedIn && showSignInPopup} onLoginSuccess={handleLoginSuccess} onCancel={handleLoginCancel} />
        </div>
    )
}
