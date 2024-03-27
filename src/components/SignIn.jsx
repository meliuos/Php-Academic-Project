import React, { useState } from 'react';
import './SignIn.css';

export default function SignInPopup(auth) {
    const [mail, SetMail] = useState('');
    const [password, setPassword] = useState('');
    const [logedin, setLogedin] = useState(auth);
    const [isOpen, setIsOpen] = useState(false);
    const openPopup = () => {
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
    };
    const handleLogin = async () => {
        try {
          const response = await axios.post('LogIn.php', { username, password });
          console.log(response.data);
          // Handle success
        } catch (error) {
          console.error(error.response.data);
          // Handle error
        }
      };

    return (
        <div>
            <button onClick={openPopup} className='in'>Sign In</button>
            {auth && isOpen && (
                <div className="popup">
                    <h2>Sign In</h2>
                    <form action="POST" onSubmit={handleLogin}>
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

