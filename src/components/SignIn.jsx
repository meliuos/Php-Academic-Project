import React, { useState } from 'react';
import './SignIn.css';
import LoginPopup from './LoginPopup';

export default function SignInPopup({ onLoginSuccess , PostAuth }) {
    const [isOpen, setIsOpen] = useState(false);
    const openPopup = () => {
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
    };

    if (PostAuth === true) {
        openPopup();
    }

    return (
        <div>
            <button className='in' onClick={openPopup}>Log in</button>
            <LoginPopup isOpen={isOpen} closePopup={closePopup} onLoginSuccess={onLoginSuccess} />
        </div>
    );
}
