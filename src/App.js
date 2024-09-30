// src/App.js
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; 
import Login from './components/Login'; 
import Home from './components/Home';   

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación

  return (
    <div className="App">

      <Routes>
        {/* Ruta de login */}
        <Route 
          path="/" 
          element={<Login setIsAuthenticated={setIsAuthenticated} />} 
        />

        <Route 
          path="/home" 
          element={isAuthenticated ? <Home /> : <Navigate to="/" />} 
          
        />

        <Route 
          path="*" 
          element={<Navigate to="/" />} 
        />
      </Routes>

    </div>
  );
}

export default App;
