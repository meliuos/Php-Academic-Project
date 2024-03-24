import React from 'react'
import './Navbar.css'
import logo from '../Assets/20548.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu,setMenu]= useState("home");
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="Robenda logo" />
            <p>Robenda</p>
        </div>
        <ul className="nav-menu">
          <li onClick={() => {setMenu("home")}}><Link to='/' className='links'> About us</Link> {menu==="home"?<hr/>:<></>} </li>
          <li onClick={() => {setMenu("woman")}}><Link to='/woman' className='links'> Dresses  </Link> {menu==="woman"?<hr/>:<></>} </li>
          <li onClick={() => {setMenu("collections")}}><Link to='/collections' className='links'> Collections</Link>{menu==="collections"?<hr/>:<></>}</li>
          <li onClick={() => {setMenu("contact")}}><Link to='/contact' className='links'>Contact us</Link>{menu==="contact"?<hr/>:<></>}</li>
        </ul>
        <div className='appoint'>
          <p>Appointment</p>
        </div>
        
    </div>
  )
}

export default Navbar