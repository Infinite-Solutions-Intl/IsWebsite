import React from 'react'
import play from '../../../assets/img/play.svg'

export  function CardTravaux({name , title , texte}) {
  return (
    <div className={'card-travaux '+ name}>
        <div className='card-footer'>
            <div className='card-text'>
                <span>{title}</span>
                <br></br>
                <span>{texte}</span>
            </div>

            <div className='play-btn'>
                <img src={play}></img>
            </div>

        </div>
    </div>
  )
}


export  function TravauxText({className}) {
  return (
    <div className={className}>
        <h1> Nos récents travaux</h1>
        <p>
        Nos clients sont satisfaits de la qualité 
        de nos services. Ci-dessous les dernières 
        prestations effectuées et livrées pour nos 
        clients.
        </p>
    </div>
  )
}


export default function Travaux() {
  return (
    
    <div className='travaux-container'>
      <TravauxText className={'travaux-text-mobile'}></TravauxText>
    <div className='travaux'>
        <TravauxText className={'travaux-text'}></TravauxText>
        <CardTravaux name={'bloo'} title={'bloo Ap'} texte={'bloo app'}></CardTravaux>
        <CardTravaux name={'bloo'} title={'bloo Ap'} texte={'bloo app'}></CardTravaux>
        <CardTravaux name={'bloo'} title={'bloo Ap'} texte={'bloo app'}></CardTravaux>

    </div>

    <div className="travaux-progress">
    <span className ='progress-1'></span>
    </div>

    </div>
  )
}
