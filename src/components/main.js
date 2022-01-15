import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Portfolio from './portfolio';
import Contact from './contact';


const Main = () => (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>

)
export default Main;