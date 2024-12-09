import React from "react";
import Button from "../Button";
import logo from "./logo/LogoBlanc.svg";
import "./index.scss";

function Footer() {
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

        <div className="footer-form">
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
                type="email"
                id="email"
                name="email"
                placeholder="Votre email"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Votre adresse"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Votre ville"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  placeholder="Votre code postal"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Votre numéro de téléphone"
                required
              />
            </div>

            <div className="form-group">
              <select id="works" name="works" required>
                <option value="">Choisissez un type de travaux</option>
                <option value="toitures">Toitures</option>
                <option value="couverture">Couverture</option>
                <option value="démoussage">Démoussage</option>
                <option value="isolation">Isolation</option>
                <option value="zinguerie">Zinguerie</option>
                <option value="velux">Installation de Velux</option>
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
