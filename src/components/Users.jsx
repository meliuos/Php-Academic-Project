import React from "react";
import { useState,useEffect } from "react";
import "./Users.css";
import { useFetcher } from "react-router-dom";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [admins, setAdmins] = useState([]);

    useEffect (() => {
        setAdmins(sessionStorage.getItem('user').isAdmin);
    },[admins]);

    useEffect(() => {
      fetchUsers();
    }, []);
  
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost/RentAway/getUsers.php');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
  
    const handleDeleteUser = async (id) => {
      try {
        const response = await fetch(`http://localhost/RentAway/deleteUser.php?id=${id}`, {
          method: 'DELETE',
        });
        setUsers(users.filter(user => user.id !== id));
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    };
  
    return (
      <div className="container">
        <div className="users">
          <h2>Users</h2>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                <span className="email">{user.mail}</span>
                <button className=".btn" onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };