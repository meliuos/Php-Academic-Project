import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

export default function Cards() {

    const handleCardClick = async (id) => {
        try {
            const response = await axios.get(`http://localhost/RentAway/getAppartById.php?id=${id}`);
            const apartment = response.data;
            console.log(response.data);
            // Redirect to details page with fetched data
            window.location.href = `/details/${id}`;
        } catch (error) {
            console.error('Error fetching apartment details:', error);
        }
    };

    const handleSectionClick = (event) => {
        // Check if the click event occurred on a card or its children
    const cardElement = event.target.closest('.card');
    if (cardElement) {
        // Extract the id from the card's data attribute or any other identifier
        const id = cardElement.id;
        console.log(id);
        // Call handleCardClick with the id
        handleCardClick(id);
    }
    };


    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/RentAway/getData.php')
            .then(response => {
                response.data.forEach(element => {
                    setData(response.data);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            {...item} 
        />
    )
})



  return (
    <section className="cards-list" id='cards-list' onClick={handleSectionClick}>
            {cards}
    </section>
  )


}
