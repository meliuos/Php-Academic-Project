import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams

export default function DetailsPage() {
    const { id } = useParams();

    const [details, setDetails] = useState(null);

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

    return (
      <div>
        {details ? (
          <div> 
            <img src={details.coverImg} alt={details.title} style={{ width: '100%' }} />
            <h2>{details.title}</h2>
            <p>{details.description}</p>
            <p>Price: {details.price} €/night</p>
            <a href="mailto:*****" ><button>Contact via Email</button></a>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
}


