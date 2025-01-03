import { useState } from "react";
import Button from "../Button";
import "./index.scss";
import logo from "../../assets/logo/LogoCouleur.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const scrollToSection = (sectionId, offset = 0) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.offsetTop - offset;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToAccueil = () => scrollToSection("toiture");
  const handleScrollToExpertise = () => scrollToSection("expertise", 100);
  const handleScrollToFooter = () => scrollToSection("footer-form");

  return (
    <header>
      <img src={logo} alt="Logo rc artisan couvreur" />
      <nav role="navigation" className={isMenuOpen ? "active" : ""}>
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
