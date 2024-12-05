import { useState } from "react";
import Header from "./components/header";
import "./App.css";
import toiture from "./assets/toiture.jpeg";
import charpente from "./assets/charpente.jpeg";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Header></Header>
      <img id="toiture" src={toiture} alt="toiture" />
      <div className="highlighted">
        <ul>
          <li>Qualité et disponibilité</li>
          <li>Devis gratuit et tarifs honnêtes</li>
          <li>Service reconnu et primé</li>
          <li>Intervention dans les meilleurs délais</li>
        </ul>
      </div>
      <div className="prestations">
        <Card
          image={charpente}
          altText="prestation de charpente"
          title="Charpente"
        />
        <Card
          image={charpente}
          altText="prestation de charpente"
          title="Charpente"
        />
        <Card
          image={charpente}
          altText="prestation de charpente"
          title="Charpente"
        />
      </div>
    </>
  );
}

export default App;
