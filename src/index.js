import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
// import { BrowserRouter } from 'react-router-dom';
// import { AuthProvider } from './contexts/AuthContext';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>, 
    document.getElementById('root')
    );

