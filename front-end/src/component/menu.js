import React from 'react'
import '../css/menu.css'
export default function Menu({clickEvent}) {

  return (
    <div onClick={clickEvent} className='circle-shap'>
        <div className = 'tirets'>
            <span className='tiret1'></span>
            <span className='tiret2'></span>
        </div>
    </div>
  )
}
