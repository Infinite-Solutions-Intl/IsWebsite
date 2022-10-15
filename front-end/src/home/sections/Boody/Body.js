import React from 'react'
import Formations from './Formations'
import Presentation from './Presentation'
import Services from './Services'
import  Technologies from './Technologies' 
import Travaux from './Travaux'
import Newsletter from './Newsletter'

export default function Body() {
  return (
    <div classNam ='body'>

        <Presentation></Presentation>
        <Services></Services>
        <Technologies></Technologies>
        <Travaux></Travaux>
        <Formations></Formations>
        <Newsletter></Newsletter>

    </div>
  )
}
