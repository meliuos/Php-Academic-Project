import React, { useState } from "react";

export default function LoginPopup(props) {
    const [response, setResponse] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        try {
            let data = await fetch('http://localhost/RentAway/LogIn.php', {
                method: 'POST',
                body: formData
            });
            data = await data.text();
            if (data === '1') {
                props.onLoginSuccess();
                props.closePopup();
            } else {
                setResponse(data);
            }
        } catch (error) {
            setResponse('Error occurred. Please try again later.');
        }
    };

    return (
        <>
            {props.isOpen && (
                <div className="popup">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Email:</label><br />
                        <input type="email" name="email" className="form-input" required /><br />
                        <label>Password:</label><br />
                        <input type="password" name="password" className="form-input" required /><br /><br />
                        <button type="submit">Submit</button>
                        <button onClick={props.closePopup}>Close</button>
                    </form>
                    {response && (
                        <p className='response'>{response}</p>
                    )}
                </div>
            )}
        </>
    );
}
