// src/components/Navbar.jsx
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
      <div className="text-2xl font-bold">TechEcole</div>
      <ul className="flex space-x-6 text-lg">
        <li><a href="#" className="hover:underline">Accueil</a></li>
        <li><a href="#" className="hover:underline">Formation</a></li>
        <li><a href="#" className="hover:underline">Connexion</a></li>
        <li><a href="#" className="hover:underline">Inscription</a></li>
      </ul>
    </nav>
  );
}
