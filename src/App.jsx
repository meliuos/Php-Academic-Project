import React from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailsPage from './Pages/DetailsPage';
import Cards from './components/Cards';
import Hero from './components/Hero';
import Contact from './Pages/Contact';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={
                        <React.Fragment>
                            <Navbar/>
                            <Hero />
                            <Cards />
                        </React.Fragment>
                    } />
                    <Route path="/details/:id" element={
                        <>
                        <Navbar/>
                        <DetailsPage />
                        </>
                    } />
                    <Route path="/details/contact/:id" element={
                    <>
                     <Navbar/>
                     <Contact />
                    </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
