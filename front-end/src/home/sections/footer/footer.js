import React from 'react'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-presentation'>
            <img src='logo.png'></img>
            <p>
            Une solution à votre problème, une expérience pour votre entreprise. Nous construisons le futur pour votre entreprise tout simplement.
            </p>

        </div>
        <div className='footer-service'>
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
        <div className='footer-entreprise'>
        <h1>L'entreprise</h1>
                <ul>
                    <li>A propos</li>
                    <li>Blog</li>
                    <li> Projets</li>
                    <li> Equipe</li>
                    <li>Contact</li>
                </ul>
        </div>
        <div className='footer-link'>
        <h1>LIENS UTILES</h1>
                <ul>
                    <li>Confidentialité</li>
                    <li>Termes & Conditions</li>
                    <li> Développement logiciel</li>
                    <li> Politique de confidentialité</li>
                </ul>
        </div>
    </footer>
  )
}
