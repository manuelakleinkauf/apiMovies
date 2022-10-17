import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global.css';
import Detalhes from './pages/detalhes';
import Home from './pages/home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/detalhes/:id" element={<Detalhes/>} />
    </Routes>

  
  </BrowserRouter>
);



