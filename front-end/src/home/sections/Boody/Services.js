import React from 'react'
import CircleIcon from '../../../component/circleIcon'

export default function Services() {
  return (
    <div className='services'>
        <h1 className='service-title'>Consulter la varieter de nos services</h1>

        <p className='service-description'>Parce que l'atteinte de vos objectifs reste votre priorité, nous vous proposons des outils et solutions simples et efficaces pour vos problématiques régulières d'entreprises.</p>
    
        <div className='services-name'>
            <ul>
                <li>Design Graphique</li>
                <li>Formation</li>
                <li>Developpement d’application</li>
                <li>Intelligence artificielle</li>
            </ul>
        </div>
        <div className='service-progress'> 
            <span></span>
        </div>
        <div className='services-slide'>
            <div className='navigation'>
                <div className='prev'>
                <img src = "prev.png" ></img>
                </div>
                <div className='next'>
                <img src = "next.png" ></img>
                </div>
            </div>

            <div className='content'>
                <div className='slide-image'>
                    
                </div>
                <div className='slide-text'>
                    <h2>Identité visuelle</h2>

                    <p>
                    Nous developpons des logiciels de bureau, des applications web et mobiles adaptés aux mesures ...
                        <br></br>
                    </p>
                    <p>    
                    Nous developpons des logiciels de bureau, des applications web et mobiles adaptés aux mesures ...
                    <br></br>
                    </p>

                    <p>
                    Nous developpons des   logiciels de bureau, des applications web et mobiles adaptés aux mesures ...
                    </p>

                    <div className='service-icons'>
                        <CircleIcon iconLink={'ps.png'}></CircleIcon>
                        <CircleIcon iconLink={'id.png'}></CircleIcon>
                        <CircleIcon iconLink={'ai.png'}></CircleIcon>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
