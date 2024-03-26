import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Contact.css'; 

export default function Contact() {
    const [object, setObject] = useState('');
    const [message, setMessage] = useState('');
    const [fetchedEmail, setFetchedEmail] = useState('');
    const { id } = useParams();
    const resetContact = () => {
        setObject('');
        setMessage('');
    };
    // calling the api to get the email of the user
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost/RentAway/getUserByAppartId.php?id=${id}`);
                setFetchedEmail(response.data.mail);
            } catch (error) {
                console.error('Error fetching email:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleSubmit = (e) => {
        // preventing submiting the form 
        e.preventDefault();
        // Use mailto link to open user's default email client with pre-filled email
        const mailtoLink = `mailto:${fetchedEmail}?subject=${encodeURIComponent(object)}&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="form-container">
            <form>
                <div className="form-group">
                    <label htmlFor="object">Object:</label>
                    <input
                        type="text"
                        id="object"
                        value={object}
                        onChange={(e) => setObject(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button type="submit" onClick={handleSubmit}>Send Message</button>
                <button onClick={resetContact}>Reset</button>
            </form>
        </div>
    );
}
