import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import AboutProvider from './components/Context/AboutContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AboutProvider>
    <App />
    </AboutProvider>
    
    </BrowserRouter>
  </React.StrictMode>
);

