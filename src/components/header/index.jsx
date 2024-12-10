import { useState } from "react";
import Button from "../Button";
import "./index.scss";
import logo from "../../assets/logo/LogoCouleur.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <img src={logo} alt="Logo rc artisan couvreur" />
      <nav role="navigation" className={menuOpen ? "active" : ""}>
        <Button.Secondary>Accueil</Button.Secondary>
        <Button.Secondary
          label="Notre expertise"
          onClick={() => {
            const expertiseSection = document.getElementById("expertise");
            expertiseSection.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <Button.Primary href="#contact">Contact et Devis</Button.Primary>
      </nav>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
}

export default Header;
