import React from 'react'

export  function CircleTechno({src}) {
    return(
        <div className='circle-techno'>
            <img src={src}></img>
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
            <CircleTechno src={'shap.png'}></CircleTechno>
            <CircleTechno src={'js.png'}></CircleTechno>
            <CircleTechno src={'react.png'}></CircleTechno>
            <CircleTechno src={'xam.png'}></CircleTechno>
        </div>
    </div>
  )
}
