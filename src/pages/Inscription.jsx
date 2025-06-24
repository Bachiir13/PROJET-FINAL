import React, { useState } from 'react';
import '../styles/Inscription.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const Inscription = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    dateNaissance: '',
    motDePasse: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.motDePasse !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.motDePasse);
      alert("Inscription réussie !");
      // redirection possible ici
    } catch (error) {
      alert("Erreur lors de l'inscription : " + error.message);
    }
  };

  return (
    <main className="inscriptionPage">
      <h1 className="inscriptionTitle">Inscription à TECÉCOLE</h1>
      <form className="inscriptionForm" onSubmit={handleSubmit}>
        <input type="text" name="nom" placeholder="Nom" onChange={handleChange} value={formData.nom} required />
        <input type="text" name="prenom" placeholder="Prénom" onChange={handleChange} value={formData.prenom} required />
        <input type="email" name="email" placeholder="Adresse e-mail" onChange={handleChange} value={formData.email} required />
        <input type="tel" name="telephone" placeholder="Téléphone" onChange={handleChange} value={formData.telephone} required />
        <input type="date" name="dateNaissance" onChange={handleChange} value={formData.dateNaissance} required />
        <input type="password" name="motDePasse" placeholder="Mot de passe" onChange={handleChange} value={formData.motDePasse} required />
        <input type="password" name="confirmPassword" placeholder="Confirmez le mot de passe" onChange={handleChange} value={formData.confirmPassword} required />

        <button type="submit" className="btn">S'inscrire</button>
      </form>
    </main>
  );
};

export default Inscription;
