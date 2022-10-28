import React from 'react'

import shap from '../../../assets/img/shap.png'
import js from '../../../assets/img/js.png'
import react from '../../../assets/img/react.png'
import xam from '../../../assets/img/xam.png'
import logo_blanc from '../../../assets/img/logo_blanc.png'


export  function CircleTechno({src , name}) {
    return(
        <div className={'circle-techno '+name}>
            <img src={src} ></img>
        </div>
    )
}
export default function Technologies() {
  return (

    <div className='container-technologies'>

    
    <div className='technologies'>
        <div className='logo-techo'>

            <img src={logo_blanc}></img>

        </div>

        <div className='technos'>
            <CircleTechno src={shap} name={'shap'}></CircleTechno>
            <CircleTechno src={js} name ={'js'}></CircleTechno>
            <CircleTechno src={react} name={'react'}></CircleTechno>
            <CircleTechno src={xam} name={'xamarin'}></CircleTechno>
        </div>
    </div>

    </div>
  )
}
