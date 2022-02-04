import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Portfolio from './portfolio';
import Contact from './contact';
import Manage from './manage';
import Login from './login';
// import { AuthProvider } from '../contexts/AuthContext';



const Main = () => (
    <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/login" element={<Login />} />
    </Routes>
)
export default Main;