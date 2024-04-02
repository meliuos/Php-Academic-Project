import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

export default function Cards({admin}) {
    const history = useNavigate();

    const handleCardClick = (id) => {
        try {
            history(`/details/${id}`);
        } catch (error) {
            console.error('Error fetching apartment details:', error);
        }
    };

    const handleSectionClick = (event) => {
    const cardElement = event.target.closest('.card');
    if (cardElement) {
        const id = cardElement.id;
        handleCardClick(id);
    }
    };


    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/RentAway/getData.php',{
            withCredentials: true,
          })
            .then(response => {
                response.data.forEach(element => {
                    setData(response.data);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost/RentAway/deleteData.php?id=${id}`);
            setData(data.filter(item => item.id !== id));
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };
  const cards = data.map(item => {
    return (
        <div>
        <Card
            key={item.id}
            {...item} 
        />
        {admin && <button className="delete" onClick={() => handleDelete(item.id)}>Delete</button>}
        </div>
        
    )
})



  return (
    <section className="cards-list" id='cards-list' onClick={handleSectionClick}>
            {cards}
    </section>
  )


}
