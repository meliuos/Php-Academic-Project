import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 
import './DetailsPage.css'; 
import { useNavigate } from 'react-router-dom';

export default function DetailsPage() {
    const { id } = useParams();
    const history = useNavigate();
    const [details, setDetails] = useState(null);
    // Fetch apartment details by ID
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost/RentAway/getAppartById.php?id=${id}`);
                setDetails(response.data);
            } catch (error) {
                console.error('Error fetching details:', error);
            }
        };
        fetchData();
    }, [id]); // Fetch data when ID changes

    const contactViaEmail = () => {
        try {
            history(`/details/contact/${id}`);
        } catch (error) {
            console.error('Error fetching apartment details:', error);
        }
    };

    return (
        <div className="container">
            {details ? (
                <div> 
                    <img src={details.coverImg} alt={details.title} className="image" />
                    <h2 className="title">{details.title}</h2>
                    <p className="description">{details.description}</p>
                    <p className="price">Price: {details.price} €/night</p>
                    <div className="button-container">
                        <button className="button" onClick={contactViaEmail}>Contact via Email</button>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
