import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import axios from 'axios';
import Cards from './components/Cards';


function App() {
     
return (
    <div>
        <Navbar /> 
        <Hero />
        <Cards/>
    </div>
)
}

export default App
