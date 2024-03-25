import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './Card';

export default function Cards() {
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
    <section className="cards-list">
            {cards}
    </section>
  )
}
