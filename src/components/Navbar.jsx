import React from "react"
import { Link } from 'react-router-dom'
import './Navbar.css'
import Signup from "./Signup.jsx";
import SignInPopup from "./SignIn.jsx";
export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <Link to="/" style={{ textDecoration: 'none' }}><p>RentAway</p></Link>
            </div>
            <div className="rent">
                <p>Rent your house</p>
            </div>
            <div className='log-in-out'>
              <SignInPopup />
              <Signup/>
            </div>
            
        </div>
      )
}