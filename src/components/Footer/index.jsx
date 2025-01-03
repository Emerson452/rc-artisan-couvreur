import React, { useState } from "react";
import Button from "../Button";
import logo from "../../assets/logo/LogoBlanc.svg";
import "./index.scss";

function Footer() {
  const [contactValue, setContactValue] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setContactValue(value);
    validateInput(value);
  };

  const validateInput = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (emailRegex.test(value) || phoneRegex.test(value)) {
      setError("");
    } else {
      setError("Veuillez entrer un email ou un numéro de téléphone valide.");
    }
  };

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-info">
          <img src={logo} alt="Logo rc artisan couvreur" />
          <h2>Parlons ensemble de votre prochain projet</h2>
          <p>Téléphone : 07 61 66 79 05</p>
          <p>
            Adresse : 2 rue du Pré des Aulnes, 77340 Pontault-Combault, France
          </p>
          <p>Email : rc.couvreur77@gmail.com</p>
        </div>

        <div id="footer-form">
          <form>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Votre prénom"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="text"
                id="contact"
                name="contact"
                placeholder="Votre email ou numéro de téléphone"
                value={contactValue}
                onChange={handleInputChange}
                required
              />
              {error && <p className="error-message">{error}</p>}
            </div>

            <div className="form-group">
              <select id="works" name="works" required>
                <option value="">Choisissez un type de travaux</option>
                <option value="couverture">Couverture</option>
                <option value="zinguerie">Zinguerie</option>
                <option value="charpente">Charpente</option>
                <option value="isolation">Isolation</option>
                <option value="gouttière">Gouttière</option>
                <option value="velux">Velux</option>
                <option value="étanchéité">Étanchéité</option>
                <option value="démoussage">Démoussage</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Votre message"
                rows="3"
                required
              ></textarea>
            </div>

            <Button.Primary label="Envoyer" />
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} RC ARTISAN COUVREUR. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
