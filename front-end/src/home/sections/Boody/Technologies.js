import React from 'react'

export  function CircleTechno({src , name}) {
    return(
        <div className={'circle-techno '+name}>
            <img src={src} ></img>
        </div>
    )
}
export default function Technologies() {
  return (
    <div className='technologies'>
        <div className='logo-techo'>

            <img src='logo_blanc.png'></img>

        </div>

        <div className='technos'>
            <CircleTechno src={'shap.png'} name={'shap'}></CircleTechno>
            <CircleTechno src={'js.png'} name ={'js'}></CircleTechno>
            <CircleTechno src={'react.png'} name={'react'}></CircleTechno>
            <CircleTechno src={'xam.png'} name={'xamarin'}></CircleTechno>
        </div>
    </div>
  )
}
