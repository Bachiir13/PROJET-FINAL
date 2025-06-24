import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageAccueil from './pages/PageAccueil';
import Inscription from './pages/Inscription'; 
import Connexion from './pages/Connexion';
import Formations from './pages/Formations'; // Assurez-vous que ce fichier existe


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PageAccueil />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        {/* Ajoute d'autres routes ici si nécessaire */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
