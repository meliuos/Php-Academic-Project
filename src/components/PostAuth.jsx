import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPopup from './LoginPopup.jsx';

export default function PostAuth({ onLoginSuccess }) {
    const navigate = useNavigate();
    const session = JSON.parse(sessionStorage.getItem('user'));
    const [isLoggedIn, setIsLoggedIn] = useState(session && session.success);
    const [showSignInPopup, setShowSignInPopup] = useState(session && !session.success);
    const [loginAttempted, setLoginAttempted] = useState(false); 

    useEffect(() => {
        console.log("Isloggedin",isLoggedIn);
        setIsLoggedIn(session && session.success);
    }, [isLoggedIn,loginAttempted]);

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
