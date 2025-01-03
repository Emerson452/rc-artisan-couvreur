import "./App.scss";
import toiture from "./assets/images/toiture-rc-artisan.jpeg";
import couverture from "./assets/images/couverture-rc-artisan.jpg";
import charpente from "./assets/images/charpente-rc-artisan.jpg";
import zinguerie from "./assets/images/zinguerie-rc-artisan.jpg";
import isolation from "./assets/images/isolation-rc-artisan.jpg";
import gouttière from "./assets/images/gouttière-rc-artisan.jpg";
import velux from "./assets/images/velux-rc-artisan.jpg";
import étanchéité from "./assets/images/étanchéité-rc-artisan.jpg";
import démoussage from "./assets/images/démoussage-rc-artisan.jpg";

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
    alt: "Couverture de toit en installation",
  },
  {
    background: zinguerie,
    title: "ZINGUERIE",
    description:
      "Pose et réparation des éléments métalliques de toiture pour une parfaite étanchéité et durabilité.",
    alt: "Travaux de zinguerie sur toiture",
  },
  {
    background: charpente,
    title: "CHARPENTE",
    description:
      "Conception, installation et réparation des structures en bois pour un support robuste et durable.",
    alt: "Structure de charpente en bois",
  },
  {
    background: isolation,
    title: "ISOLATION",
    description:
      "Amélioration de l'efficacité énergétique avec des matériaux isolants de haute qualité.",
    alt: "Isolation de toiture pour efficacité énergétique",
  },
  {
    background: gouttière,
    title: "GOUTTIÈRE",
    description:
      "Installation et nettoyage des gouttières pour un drainage efficace des eaux pluviales.",
    alt: "Installation de gouttières pour drainage des eaux",
  },
  {
    background: velux,
    title: "VELUX",
    description:
      "Pose de fenêtres de toit pour apporter lumière naturelle et ventilation à votre intérieur.",
    alt: "Installation de fenêtres de toit Velux",
  },
  {
    background: étanchéité,
    title: "ÉTANCHÉITÉ",
    description:
      "Traitements spécifiques pour prévenir les infiltrations et protéger votre toiture.",
    alt: "Travaux d'étanchéité sur toiture",
  },
  {
    background: démoussage,
    title: "DÉMOUSSAGE",
    description:
      "Nettoyage de la toiture pour éliminer mousses, lichens et saletés, prolongeant ainsi sa durée de vie.",
    alt: "Démoussage de toiture pour prolonger sa durée de vie",
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
      <main>
        <div className="toiture-container">
          <img
            id="toiture"
            src={toiture}
            alt="Toiture RC Artisan Couvreur à Pontault-Combault"
          />
          <div className="toiture-overlay">
            <h1>RC-ARTISAN-COUVREUR</h1>
          </div>
        </div>
        <section className="highlighted">
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
        </section>
        <section className="container-product">
          <div id="expertise">
            {cards.map((card, index) => (
              <Card
                key={index}
                background={card.background}
                altBackground={card.alt}
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
        </section>
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.0247318584475!2d2.6245175767422384!3d48.80050660477797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60f7ca61845f3%3A0xde9cd06df725c8bb!2s2%20Rue%20du%20Pr%C3%A9%20des%20Aulnes%2C%2077340%20Pontault-Combault!5e0!3m2!1sen!2sfr!4v1733590488006!5m2!1sen!2sfr"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
