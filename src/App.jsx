import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import axios from 'axios';


function App() {
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
    <div>
        <Navbar /> 
        <Hero />
        <section className="cards-list">
            {cards}
        </section>
    </div>
)
}

export default App
