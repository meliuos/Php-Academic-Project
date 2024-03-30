import React, { useEffect, useState } from 'react';

export default function UserDashboard() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [editIndex, setEditIndex] = useState(-1);
    const [editedData, setEditedData] = useState({});

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost/RentAway/getDataByEmail.php'); 
            const jsonData = await response.json();
            console.log(jsonData);
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditedData(data[index]);
    };

    const handleSave = async () => {
        try {
            const response = await fetch('http://localhost/RentAway/saveEditedData.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedData),
            });
            const result = await response.json();
            console.log(result);
            fetchData();
            setEditIndex(-1);
            setEditedData({});
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
    };
    useEffect(() => {
        fetchData(); 
    }, []);
    return (
        <div>

            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Image Link</th>
                            <th>Location</th>
                            <th>Open spots</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item.id}>
                                <td>{editIndex === index ? <input type="text" name="title" value={editedData.title || item.title} onChange={handleInputChange} /> : item.title}</td>
                                <td>{editIndex === index ? <input type="text" name="description" value={editedData.description || item.description} onChange={handleInputChange} /> : item.description}</td>
                                <td>{editIndex === index ? <input type="text" name="price" value={editedData.price || item.price} onChange={handleInputChange} /> : item.price}</td>
                                <td>{editIndex === index ? <input type="text" name="coverImg" value={editedData.coverImg || item.coverImg} onChange={handleInputChange} /> : item.coverImg}</td>
                                <td>{editIndex === index ? <input type="text" name="location" value={editedData.location || item.location} onChange={handleInputChange} /> : item.location}</td>
                                <td>{editIndex === index ? <input type="text" name="openSpots" value={editedData.openSpots || item.openSpots} onChange={handleInputChange} /> : item.openSpots}</td>
                                <td>
                                    {editIndex === index ? (
                                        <button onClick={handleSave}>Save</button>
                                    ) : (
                                        <button onClick={() => handleEdit(index)}>Edit</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};
