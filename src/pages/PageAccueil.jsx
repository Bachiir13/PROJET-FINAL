import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/PageAccueil.css'; // Styles spécifiques à la page d'accueil

const PageAccueil = () => {
  return (
    <>
      <main className="mainContent">
        <header className="banner">
          <div>
            <h1 className="bannerTitle">TECHECOLE</h1>
            <p className="bannerText">L’INFORMATIQUE D’AUJOURD’HUI, LES CARRIÈRES DE DEMAIN.</p>
          </div>
        </header>

        {/* ✅ Introduction */}
        <section className="section sectionCenter">
          <p>
            Bienvenue à TECHECOLE, l’établissement de référence pour les métiers d’avenir dans le numérique.
          </p>
        </section>

        {/* ✅ Formations les plus demandées */}
        <section className="formationSection">
          <h2 className="sectionTitle">FORMATIONS LES PLUS DEMANDEES</h2>
          <div className="formationList">
            <div className="formationCard">
              <img src="/images/pexels-goumbik-574077.jpg" alt="Développement Web & Mobile" className="formationImage" />
              <h3>Développement Web</h3>
              <p>Maîtrisez les technologies web modernes pour créer des applications puissantes et responsives.</p>
            </div>
            <div className="formationCard">
              <img src="/images/pexels-googledeepmind-17483868.jpg" alt="Intelligence Artificielle" className="formationImage" />
              <h3>Intelligence Artificielle</h3>
              <p>Apprenez à concevoir des systèmes intelligents et à travailler avec des modèles d’apprentissage automatique.</p>
            </div>
            <div className="formationCard">
              <img src="/images/pexels-pixabay-60504.jpg" alt="Cybersécurité" className="formationImage" />
              <h3>Cybersécurité</h3>
              <p>Protégez les systèmes d'information en apprenant à anticiper, détecter et contrer les attaques numériques.</p>
            </div>
          </div>
          <div className="formationBtnContainer">
            <a href="/formations" className="btn">Voir tout le catalogue</a>
          </div>
        </section>
        <section className="campusSection">
            <h2 className="sectionTitle">NOTRE CAMPUS</h2>
            <div className="campusContent">
              <div className="campusImages">
                <img src="/images/L1018059.jpg" alt="Campus extérieur" className="campusImage" />
                <img src="/images/Amphi-1024x682.jpg" alt="Campus intérieur" className="campusImage" />
              </div>
              <div className="campusText">
                <p>
                  Situé au cœur de Paris, notre campus moderne offre un cadre d'apprentissage idéal. 
                  Équipé de laboratoires informatiques à la pointe de la technologie, d’espaces collaboratifs et d’une ambiance dynamique,
                  TECHECOLE vous place dans les meilleures conditions pour réussir.
                </p>
                <p><strong>Adresse :</strong> 42 Rue des Technologies, 75012 Paris, France</p>
              </div>
            </div>
          </section>
          <section className="excellenceSection">
  <h2 className="excellenceTitle">VISEZ L’EXCELLENCE</h2>
  <div className="excellenceLogos">
    <div className="logoItem">
      <img src="/images/coins-money-icon-24.png" alt="Gratuit" className="logoImg" />
      <p>Gratuit</p>
    </div>
    <div className="logoItem">
      <img src="/images/131-1313837_transparent-white-silhouette-png.png" alt="Pour tous" className="logoImg" />
      <p>Pour Tous</p>
    </div>
    <div className="logoItem">
      <img src="/images/third-icon.png" alt="Autre logo" className="logoImg" />
      <p>Excellence</p>
    </div>
  </div>
</section>
<section className="professorSection">
  <div className="professorContent">
    <div className="professorText">
      <h2 className="sectionTitle">DES ENSEIGNANTS QUALIFIES</h2>
      <p>
        Nos formateurs sont des experts reconnus dans leur domaine, dotés d’une solide expérience professionnelle.
        Ils accompagnent chaque étudiant avec pédagogie, exigence et passion pour assurer leur réussite.
      </p>
    </div>
    <div className="professorImageContainer">
      <img src="/images/55179437-computer-teacher-assisting-a-student-in-classroom.jpg" alt="Enseignants qualifiés" className="professorImage" />
    </div>
  </div>
</section>




        <section className="section">
          <h2 className="sectionTitle">Nos domaines d’enseignement</h2>
          <ul>
            <li>Développement Web et Mobile</li>
            <li>Cybersécurité</li>
            <li>Intelligence Artificielle</li>
            <li>Réseaux et Systèmes</li>
            <li>Data Science</li>
          </ul>
        </section>

        <section className="section sectionCenter">
          <h2 className="sectionTitle">Rejoignez TECÉCOLE dès aujourd’hui !</h2>
          <a href="/inscription" className="btn">Je m’inscris</a>
        </section>
      </main>
    </>
  );
};

export default PageAccueil;
