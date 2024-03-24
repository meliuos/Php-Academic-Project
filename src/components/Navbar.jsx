import React from "react"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    const [menu,setMenu]= useState("home");
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <p>RentAway</p>
            </div>
            <div className='log-in-out'>
              <p className="in">Sign in</p>
              <p className="up">Sign Up</p>
            </div>
            
        </div>
      )
}