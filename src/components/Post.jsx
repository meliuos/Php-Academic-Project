import React, { useState } from 'react';
import './Post.css';
import { useNavigate } from 'react-router-dom';

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
        const sessionData = JSON.parse(sessionStorage.getItem('user'));
        const formData = new FormData(e.target);
        
        // Check if required fields are empty
        if (!formData.get('title') || !formData.get('description') || !formData.get('price') || !formData.get('coverImg') || !formData.get('location') || !formData.get('openSpots')) {
            alert('Please fill out all the required fields');
            return;
        }
        houseDetails.email=sessionData.email;
        try {
            const response = await fetch('http://localhost/RentAway/addData.php', {
                method: 'POST',
                body: JSON.stringify(houseDetails),
            });
            const data = await response.json();
            if (data.success) {
                alert('Offer created successfully');
                useNavigate('/');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
        <div className='post'>
            <div>
                <h2>Please Enter the information below:</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Title:
                        <input type="text" name="title" value={houseDetails.title} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Description:
                        <input type="text" name="description" value={houseDetails.description} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Price:
                        <input type="number" name="price" value={houseDetails.price} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Image Link:
                        <input type="text" name="coverImg" value={houseDetails.coverImg} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Location:
                        <input type="text" name="location" value={houseDetails.location} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Open spots:
                        <input type="number" name="openSpots" value={houseDetails.openSpots} onChange={handleChange} />
                    </label>
                    <button className='sub' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
