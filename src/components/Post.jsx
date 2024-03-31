
import React, { useState } from 'react';

export default function Post() {
    const [houseDetails, setHouseDetails] = useState({
        title: '',
        description: '',
        price: '',
        coverImg: '',
        location: '',
        openSpots: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHouseDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        try {
        const response = await fetch('http://localhost/RentAway/addData.php', {
            method: 'POST',
            body: formData
        });
        const data = await response.text();
        if (data === '1') {
        alert('Offer created successfully');
        }
        } catch (error) {
        console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                title:
                <input type="text" name="title" value={houseDetails.title} onChange={handleChange} />
            </label>
            <br />
            <label>
                description:
                <input type="text" name="description" value={houseDetails.description} onChange={handleChange} />
            </label>
            <br />
            <label>
                price:
                <input type="number" name="price" value={houseDetails.price} onChange={handleChange} />
            </label>
            <br />
            <label>
                coverImg:
                <input type="text" name="coverImg" value={houseDetails.coverImg} onChange={handleChange} />
            </label>
            <br />
            <label>
                location:
                <input type="text" name="location" value={houseDetails.location} onChange={handleChange} />
            </label>
            <label>
                openSpots:
                <input type="number" name="openSpots" value={houseDetails.openSpots} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form> // the rating and the review count should be random in apparts table and the id auto incremented
    );
}