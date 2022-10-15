import React from 'react'
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
                <img src='play.svg'></img>
            </div>

        </div>
    </div>
  )
}

export default function Travaux() {
  return (
    <div className='travaux-container'>
    <div className='travaux'>
        <div className='travaux-text'>
            <h3> Nos récents travaux</h3>
            <p>
            Nos clients sont satisfaits de la qualité 
            de nos services. Ci-dessous les dernières 
            prestations effectuées et livrées pour nos 
            clients.
            </p>
        </div>
        <CardTravaux name={'bloo'} title={'bloo Ap'} texte={'bloo app'}></CardTravaux>
        <CardTravaux name={'bloo'} title={'bloo Ap'} texte={'bloo app'}></CardTravaux>
        <CardTravaux name={'bloo'} title={'bloo Ap'} texte={'bloo app'}></CardTravaux>

    </div>
    </div>
  )
}
