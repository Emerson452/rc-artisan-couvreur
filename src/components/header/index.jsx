import Button from "../Button";
import "./index.css";

function Header() {
  return (
    <header className="header">
      <img></img>

      <nav>
        <Button.Primary>Accueil</Button.Primary>
        <Button.Secondary>Notre expertise</Button.Secondary>
        <Button.Tertiary href="#contact">Contact et Devis</Button.Tertiary>
        <a href="#contact" className="btn-primar  y">
          Obtenez un devis
        </a>
      </nav>
    </header>
  );
}

export default Header;
