import Button from "../Button";
import "./index.css";
import logo from "../../assets/LogoCouleurNoText.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo rc artisan couvreur" />
      <nav role="navigation">
        <Button.Secondary>Accueil</Button.Secondary>
        <Button.Secondary>Notre expertise</Button.Secondary>
        <Button.Primary href="#contact">Contact et Devis</Button.Primary>
      </nav>
    </header>
  );
}

export default Header;
