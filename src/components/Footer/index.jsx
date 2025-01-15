import React, { useState } from "react";
import Button from "../Button";
import logo from "../../assets/logo/LogoBlanc.svg";
import emailjs from "emailjs-com";
import "./index.scss";

function Footer() {
  const [contactValue, setContactValue] = useState("");
  const [firstname, setFirstname] = useState("");
  const [name, setName] = useState("");
  const [works, setWorks] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "contact") {
      setContactValue(value);
      validateInput(value);
    } else if (name === "firstname") {
      setFirstname(value);
    } else if (name === "name") {
      setName(value);
    } else if (name === "works") {
      setWorks(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const validateInput = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(?:\+33|0)[1-9](?:[ \.-]?[0-9]{2}){4}$/;

    if (emailRegex.test(value) || phoneRegex.test(value)) {
      setError("");
    } else {
      setError("Veuillez entrer un email ou un numéro de téléphone valide.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (error) return;

    const templateParams = {
      firstname,
      name,
      contact: contactValue,
      works,
      message,
    };

    emailjs
      .send(
        "service_nyrxokc",
        "template_y8za37r",
        templateParams,
        "FyMMCZ_DLI_nzhr2q"
      )
      .then(
        (response) => {
          console.log("Email envoyé avec succès", response);
          alert("Votre message a bien été envoyé !");
        },
        (error) => {
          console.error("Erreur lors de l'envoi de l'email", error);
          alert("Une erreur est survenue. Veuillez réessayer.");
        }
      );
  };

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-info">
          <img src={logo} alt="Logo rc artisan couvreur" />
          <h3>Parlons ensemble de votre prochain projet</h3>
          <p>
            Tél :
            <a href="tel:+33761667905" className="footer-phone-link">
              07 61 66 79 05
            </a>
            <span id="between-phone">/</span>
            <a href="tel:+33164884239" className="footer-phone-link">
              01 64 88 42 39
            </a>
          </p>

          <p>
            Adresse : 2 rue du Pré des Aulnes, 77340 Pontault-Combault, France
          </p>
          <p>Email : rc.couvreur77@gmail.com</p>
        </div>

        <div id="footer-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Votre prénom"
                  value={firstname}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                  value={name}
                  onChange={handleInputChange}
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
              <label htmlFor="works" className="sr-only">
                Type de travaux
              </label>
              <select
                id="works"
                name="works"
                value={works}
                onChange={handleInputChange}
                required
              >
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
                value={message}
                onChange={handleInputChange}
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
