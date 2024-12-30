import "./App.scss";
import toiture from "./assets/images/toiture.jpeg";
import couverture from "./assets/images/couverture.jpg";
import charpente from "./assets/images/charpente.jpg";
import zinguerie from "./assets/images/zinguerie.jpg";
import isolation from "./assets/images/isolation.jpg";
import gouttière from "./assets/images/gouttière.jpg";
import velux from "./assets/images/velux.jpg";
import étanchéité from "./assets/images/étanchéité.jpg";
import démoussage from "./assets/images/démoussage.jpg";

import memo from "./assets/icon/memo.svg";
import tools from "./assets/icon/tools.svg";
import employees from "./assets/icon/employees.svg";
import worker from "./assets/icon/worker.svg";

import Header from "./components/header";
import Button from "./components/Button";
import Card from "./components/Card";
import Highlights from "./components/Highlights";
import Step from "./components/Step";
import Footer from "./components/Footer";

const cards = [
  {
    background: couverture,
    title: "COUVERTURE",
    description:
      "Installation et entretien de toitures pour assurer une protection optimale contre les intempéries.",
  },
  {
    background: zinguerie,
    title: "ZINGUERIE",
    description:
      "Pose et réparation des éléments métalliques de toiture pour une parfaite étanchéité et durabilité.",
  },
  {
    background: charpente,
    title: "CHARPENTE",
    description:
      "Conception, installation et réparation des structures en bois pour un support robuste et durable.",
  },
  {
    background: isolation,
    title: "ISOLATION",
    description:
      "Amélioration de l'efficacité énergétique avec des matériaux isolants de haute qualité.",
  },
  {
    background: gouttière,
    title: "GOUTTIÈRE",
    description:
      "Installation et nettoyage des gouttières pour un drainage efficace des eaux pluviales.",
  },
  {
    background: velux,
    title: "VELUX",
    description:
      "Pose de fenêtres de toit pour apporter lumière naturelle et ventilation à votre intérieur.",
  },
  {
    background: étanchéité,
    title: "ÉTANCHÉITÉ",
    description:
      "Traitements spécifiques pour prévenir les infiltrations et protéger votre toiture.",
  },
  {
    background: démoussage,
    title: "DÉMOUSSAGE",
    description:
      "Nettoyage de la toiture pour éliminer mousses, lichens et saletés, prolongeant ainsi sa durée de vie.",
  },
];

const handleScrollToFooter = () => {
  const footerForm = document.getElementById("footer-form");
  footerForm.scrollIntoView({ behavior: "smooth" });
};

function App() {
  return (
    <>
      <Header></Header>
      <div className="toiture-container">
        <img id="toiture" src={toiture} alt="toiture" />
        <div className="toiture-overlay">
          <h1>RC-ARTISAN-COUVREUR</h1>
        </div>
      </div>
      <div className="highlighted">
        <Highlights
          icon={memo}
          label="Devis gratuit et rapide"
          alt="Devis gratuit"
        />
        <Highlights
          icon={tools}
          label="Matériaux et produits de qualité"
          alt="Matériaux et produits de qualité"
        />
        <Highlights
          icon={employees}
          label="Équipe réactive et expérimentée"
          alt="Équipe professionnelle"
        />
        <Highlights
          icon={worker}
          label="Intervention dans les meilleurs délais"
          alt="Intervention dans les meilleurs délais"
        />
      </div>
      <div className="container-product">
        <div id="expertise">
          {cards.map((card, index) => (
            <Card
              key={index}
              background={card.background}
              altBackground="prestation de charpente"
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="steps-container">
          <div className="steps-list">
            <Step
              number="1"
              title="Visite du chantier"
              text="Nous venons sur chantier afin de visualiser les travaux à réaliser."
            />
            <Step
              number="2"
              title="Devis"
              text="Nous établissons un devis clair et détaillé pour vos travaux."
            />
            <Step
              number="3"
              title="Travaux"
              text="Nous réalisons vos travaux avec professionnalisme et efficacité."
            />
            <Step
              number="4"
              title="Service après-vente"
              text="Nous restons disponibles pour assurer votre satisfaction."
            />
            <div className="cta-container">
              <a href="tel:0761667905">
                <Button.Tertiary label="07 61 66 79 05" />
              </a>
              <Button.Primary label="Devis" onClick={handleScrollToFooter} />
            </div>
          </div>
        </div>
      </div>
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.0247318584475!2d2.6245175767422384!3d48.80050660477797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60f7ca61845f3%3A0xde9cd06df725c8bb!2s2%20Rue%20du%20Pr%C3%A9%20des%20Aulnes%2C%2077340%20Pontault-Combault!5e0!3m2!1sen!2sfr!4v1733590488006!5m2!1sen!2sfr"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}

export default App;
