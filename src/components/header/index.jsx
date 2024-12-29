import { useState } from "react";
import Button from "../Button";
import "./index.scss";
import logo from "../../assets/logo/LogoCouleur.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScrollToAccueil = () => {
    const accueilSection = document.getElementById("toiture");
    accueilSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToExpertise = () => {
    const expertiseSection = document.getElementById("expertise");
    if (expertiseSection) {
      const offsetTop = expertiseSection.offsetTop;
      const offset = 100;
      window.scrollTo({
        top: offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToFooter = () => {
    const footerForm = document.getElementById("footer-form");
    footerForm.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <img src={logo} alt="Logo rc artisan couvreur" />
      <nav role="navigation" className={menuOpen ? "active" : ""}>
        <Button.Secondary onClick={handleScrollToAccueil}>
          Accueil
        </Button.Secondary>
        <Button.Secondary
          label="Notre expertise"
          onClick={handleScrollToExpertise}
        />
        <Button.Primary onClick={handleScrollToFooter}>
          Contact et Devis
        </Button.Primary>
      </nav>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
}

export default Header;
