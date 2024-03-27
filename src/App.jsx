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
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <React.Fragment>
                            <Hero />
                            <Cards />
                        </React.Fragment>
                    } />
                    <Route path="/details/:id" element={<DetailsPage />} />
                    <Route path="/details/contact/:id" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
