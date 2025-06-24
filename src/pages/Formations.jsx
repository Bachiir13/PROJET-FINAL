import React from 'react';
import '../styles/Formations.css';

const Formations = () => {
  return (
    <div className="formationsPage">
      <h2 className="formationsTitle">Découvrez nos formations</h2>
      <div className="formationList">
        <div className="formationCard">
          <img src="/images/pexels-goumbik-574077.jpg" alt="Développement Web" className="formationImage" />
          <h3>Développement Web & Mobile</h3>
          <p>
            Apprenez à créer des applications web et mobiles performantes en maîtrisant les langages et frameworks modernes.
          </p>
        </div>

        <div className="formationCard">
          <img src="/images/pexels-googledeepmind-17483868.jpg" alt="IA" className="formationImage" />
          <h3>Intelligence Artificielle</h3>
          <p>
            Développez des systèmes intelligents avec le machine learning, la data science et les modèles avancés d'IA.
          </p>
        </div>

        <div className="formationCard">
          <img src="/images/pexels-pixabay-60504.jpg" alt="Cybersécurité" className="formationImage" />
          <h3>Cybersécurité</h3>
          <p>
            Protégez les infrastructures numériques en apprenant à sécuriser les réseaux, les données et les applications.
          </p>
        </div>

        <div className="formationCard">
          <img src="/images/networking.jpg" alt="Réseaux et Systèmes" className="formationImage" />
          <h3>Réseaux & Systèmes</h3>
          <p>
            Maîtrisez la gestion des réseaux informatiques, des systèmes d’exploitation et de la virtualisation.
          </p>
        </div>

        <div className="formationCard">
          <img src="/images/data-science.jpg" alt="Data Science" className="formationImage" />
          <h3>Data Science</h3>
          <p>
            Analysez et exploitez les données pour en tirer de la valeur grâce à la programmation, aux statistiques et aux outils d’analyse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Formations;
