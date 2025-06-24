import React, { useState } from 'react';
import '../styles/Connexion.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, motDePasse);
      alert("Connexion réussie !");
      // redirection possible ici
    } catch (error) {
      alert("Erreur lors de la connexion : " + error.message);
    }
  };

  return (
    <div className="connexionPage">
      <h2 className="connexionTitle">Connexion à TECÉCOLE</h2>
      <form className="connexionForm" onSubmit={handleLogin}>
        <input type="email" placeholder="Adresse e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Mot de passe" value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)} required />
        <button type="submit" className="btn">Se connecter</button>
      </form>
    </div>
  );
};

export default Connexion;
