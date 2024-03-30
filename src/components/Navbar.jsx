import React, { useEffect } from "react"
import { Link } from 'react-router-dom'
import './Navbar.css'
import SignUpForm from "./Signup.jsx";
import SignInPopup from "./SignIn.jsx";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserDashboard from "./userDashboard.jsx";
import PostAuth from "./PostAuth.jsx";


export default function Navbar() {
    const [auth, setAuth] = React.useState(false);
    const navigate = useNavigate();
    const fetchData =async () => {
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get("http://localhost/RentAway/isAuthentificated.php");
                    setAuth(response.data.success);
                } catch (error) {
                    console.error('Error fetching authentication:', error);
                }
            };
            fetchData();
        }, []);}
        const handleLoginSuccess = () => {
            setAuth(true); // Update auth state when login is successful
        };
        const handleLogout = async () => {
            try {
                const response = await axios.get("http://localhost/RentAway/logout.php");
                if (response.data.success) {
                    setAuth(false);
                    navigate('/', { replace: true }); // Redirect to main page
                }
            } catch (error) {
                console.error('Error logging out:', error);
            }
        };
    return (
    <div className='navbar'>
        <div className="nav-logo">
            <Link to="/" style={{ textDecoration: 'none' }}><p>RentAway</p></Link>
        </div>
        <div className="rent">
            <PostAuth onLoginSuccess={handleLoginSuccess}/>
        </div>
        <div className='log-in-out'>
          {!auth && <SignInPopup onLoginSuccess={handleLoginSuccess}/>}
          {!auth && <SignUpForm />}
          {auth && <Link to="/dashboard"><button className="in">Manage your posts</button></Link>  }
          {auth && <button className="up" onClick={handleLogout}>Logout</button>}
        </div>  
    </div>
      )
}