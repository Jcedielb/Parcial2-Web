// src/App.js
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; 
import Login from './components/Login'; 
import Home from './components/Home';   

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  return (
    <div className="App">
      <Routes>
        {/* Ruta de login */}
        <Route 
          path="/" 
          element={<Login setIsAuthenticated={setIsAuthenticated} />} 
        />

        {/* Ruta protegida para Home (redirigir a Login si no está autenticado) */}
        <Route 
          path="/home" 
          element={isAuthenticated ? <Home /> : <Navigate to="/" />} 
        />

        {/* Redirección por defecto (si se intenta acceder a una ruta no existente) */}
        <Route 
          path="*" 
          element={<Navigate to="/" />} 
        />
      </Routes>
    </div>
  );
}

export default App;
