import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../component/buttons'
export default function Heros() {

    const [config , setConfig]= useState(1);

    console.log(document.querySelectorAll(".title"))

    if(config==1){
        const h1 =document.querySelectorAll(".title")


        const p =document.querySelectorAll(".paragraphe")
  



    }
    if(config==2){
        
    }
    if(config==3){
        
    }
  return (
    <div className="heros">
        <div className="slide-text">
            <h1  className="title ">Nous Sommes Une <br></br>Startup Prometteuse </h1>
            <p className = "paragraphe">Besoin d'automatiser ou de digitaliser certaines des activités chronophages de votre entreprise? Qu'il s'agisse de logiciels de bureau, d'applications web, d'application mobiles ou de toute autre technologie à même de correspondre exactement à vos besoins.</p>
          
            <h1 className="title " >Nous Sommes Une Startup<br></br> Prometteuse </h1>
            <p className = "paragraphe " >Besoin d'automatiser ou de digitaliser certaines des activités chronophages de votre entreprise? Qu'il s'agisse de logiciels de bureau, d'applications web, d'application mobiles ou de toute autre technologie à même de correspondre exactement à vos besoins.</p>
          
            <h1 className="title " >Nous Sommes Une <br></br>Startup Prometteuse </h1>
            <p className = "paragraphe " >Besoin d'automatiser ou de digitaliser certaines des activités chronophages de votre entreprise? Qu'il s'agisse de logiciels de bureau, d'applications web, d'application mobiles ou de toute autre technologie à même de correspondre exactement à vos besoins.</p>
           
            <Button text={"Nous contacter"}></Button>
            <Link>Nos projets</Link>
            <div className="slide-progress"></div>
       
        </div>

        <div className="slide-img">
            <div className="slide-img1 config1-div1"></div>
            <div className="slide-img2 config1-div2"></div>
            <div className="slide-img3 config1-div3 "></div>

        </div>

        <span className="slide-progress"></span>
    </div>
  )
}
