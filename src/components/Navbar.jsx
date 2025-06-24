import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">TECHECOLE</div>

      <div className="burger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>

      <ul className={`navLinks ${isOpen ? 'active' : ''}`}>
        <li><a href="/" className="link">Accueil</a></li>
        <li><a href="/formations" className="link">Formation</a></li>
        <li><a href="/connexion" className="link">Connexion</a></li>
        <li><a href="/inscription" className="link">Inscription</a></li>
        <li><a href="/contact" className="link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
