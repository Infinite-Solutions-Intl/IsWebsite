import React from 'react'

export  function CardFormation({name , title}) {
  return (
    <div className='card-formation'>
        <div className={'img-formation '+name}>

        </div>
        <span className='title-formation'>
            {title}
        </span>
        <div className='btn-formation'>
            <span>{name}</span>
        </div>
    </div>
  )
}

export default function Formations() {
  return (
        <div className='formation'>
            <div className='formation-text'>
                <h1>
                Nos formations
                </h1>

                <p>
                Nos clients sont satisfaits de la qualité de nos services. Ci-dessous les dernières prestations effectuées et livrées pour nos clients.
                </p>

            </div>

            <div className='cards-formation'>
                <CardFormation name={'oracle'}
                                title={'Certification suivie au certificat'}
                >

                </CardFormation>

                <CardFormation name={'oracle'}
                                title={'Certification suivie au certificat'}
                >

                </CardFormation>

                <CardFormation name={'oracle'}
                                title={'Certification suivie au certificat'}>

                </CardFormation>

            </div>

            <div className="travaux-progress">
              <span className ='progress-1'></span>
            </div>
        </div>
  )
}
