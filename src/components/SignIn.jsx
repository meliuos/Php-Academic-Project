import React, { useState } from 'react';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';

export default function SignInPopup({ onLoginSuccess }) {
    const navigate = useNavigate();
    const [response, setResponse] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const openPopup = () => {
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        try {
          const response = await fetch('http://localhost/RentAway/LogIn.php', {
            method: 'POST',
            body: formData
          });
          const data = await response.text();
          if (data === '1') {
            onLoginSuccess();
           closePopup();
          }
          else {
            setResponse(data);
          }
        } catch (error) {
          setResponse('Error occurred. Please try again later.');
        }
      };

      return (
        <div>
      <button  className='in' onClick={openPopup}>Log in</button>
      
      {isOpen && <div className="popup">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label><br />
        <input type="email" name="email" className="form-input" required /><br />
        <label>Password:</label><br />
        <input type="password" name="password" className="form-input" required /><br /><br />
        <button type="submit">Submit</button>
        <button onClick={closePopup}>Close</button>
      </form>
      {response && (
        <p className='response'>{response}</p>
      )}
    </div>}
    </div>
  );
}

