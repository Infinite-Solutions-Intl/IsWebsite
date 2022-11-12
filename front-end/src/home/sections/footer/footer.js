import React from "react";
import logo from "../../../assets/img/logo.png";
import insta from "../../../assets/img/i-insta.png";
import facebook from "../../../assets/img/i-facebook.png";
import linkedin from "../../../assets/img/i-linkedin.png";
import twiter from "../../../assets/img/i-twiter.png";

export default function Footer() {
  return (
    <div className="container-footer">
      <footer className="footer">
        <div className="footer-presentation">
          <img src={logo}></img>
          <p>
            Une solution à votre problème, une expérience pour votre entreprise.
            Nous construisons le futur pour votre entreprise tout simplement.
          </p>
        </div>
        <div className="footer-service">
          <h1>Nos Services</h1>
          <ul>
            <li>Design Graphique</li>
            <li>Formations</li>
            <li>Développement logiciel</li>
            <li>Modélisation 3D</li>
            <li>Intélligence artificielle Electronique</li>
            <li>Automatique</li>
          </ul>
        </div>
        <div className="footer-entreprise">
          <h1>L'entreprise</h1>
          <ul>
            <li>A propos</li>
            <li>Blog</li>
            <li> Projets</li>
            <li> Equipe</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-link">
          <h1>LIENS UTILES</h1>
          <ul>
            <li>Confidentialité</li>
            <li>Termes & Conditions</li>
            <li> Développement logiciel</li>
            <li> Politique de confidentialité</li>
          </ul>
        </div>
      </footer>
      <div className="footer-sociaux">
        <div className="footer-line"></div>
        <div className="sociaux">
          <div className="sociaux-text">
            © 2021 <b>Infinite Solutions.</b> Tous droits reservés.
          </div>
          <div className="sociaux-icon">
            <img src={insta}></img>
            <img src={facebook}></img>
            <img src={linkedin}></img>
            <img src={twiter}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
