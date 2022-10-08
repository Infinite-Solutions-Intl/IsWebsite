import React, { useState , useLayoutEffect, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../component/buttons'
export default function Heros() {



    let  [config , setConfig]= useState(1);


        useEffect(()=>{
            const  timer=setInterval(()=>{
                
                if (config == 1) {
                    setConfig(2)
                    
                } else if(config == 2) {
                    setConfig(3)
                    
                }
                else{
                    setConfig(1)
                }

             
            } ,5000)

            return ()=>{
                clearInterval(timer)
            }
    
        } , [config])
            
    
        useLayoutEffect(()=>{
            const titles = document.querySelectorAll('.title') 
            const paragraphes =document.querySelectorAll('.paragraphe')
            const images = document.querySelector('.slide-img')
            const progress =document.querySelector('.slide-progress span')

            if(config ==1){
                titles[0].classList.remove('slide-text-hidden')
                titles[2].classList.add('slide-text-hidden')
                titles[1].classList.add('slide-text-hidden')
               

                paragraphes[0].classList.remove('slide-text-hidden')
                paragraphes[2].classList.add('slide-text-hidden')
                paragraphes[1].classList.add('slide-text-hidden')

                images.classList.add('config1')
                images.classList.remove('config2' , 'config3')

                progress.classList.add('progress-1')
                progress.classList.remove('progress-2' , 'progress-3')


            
                
            }

            else if(config ==2){
                titles[1].classList.remove('slide-text-hidden')
                titles[0].classList.add('slide-text-hidden')
                titles[2].classList.add('slide-text-hidden')

                paragraphes[1].classList.remove('slide-text-hidden')
                paragraphes[0].classList.add('slide-text-hidden')
                paragraphes[2].classList.add('slide-text-hidden')

                images.classList.add('config2')
                images.classList.remove('config1' , 'config3')

                progress.classList.add('progress-2')
                progress.classList.remove('progress-1' , 'progress-3')

              
            }

            else{

                titles[2].classList.remove('slide-text-hidden')
                titles[0].classList.add('slide-text-hidden')
                titles[1].classList.add('slide-text-hidden')

                paragraphes[2].classList.remove('slide-text-hidden')
                paragraphes[0].classList.add('slide-text-hidden')
                paragraphes[1].classList.add('slide-text-hidden')
               
                images.classList.add('config3' , )
                images.classList.remove('config1' , 'config2')

                progress.classList.add('progress-3')
                progress.classList.remove('progress-1' , 'progress-2')

                

            }
            titles[0].classList.add('green')

            console.log(images)
            

       
         } , [config])


  return (
      <>
    <div className="heros">
        <div className="slide-text">
            <h1  className="title "> 1 Nous Sommes Une Startup Prometteuse </h1>
            <p className = "paragraphe">Besoin d'automatiser ou de digitaliser certaines des activités chronophages de votre entreprise? Qu'il s'agisse de logiciels de bureau, d'applications web, d'application mobiles ou de toute autre technologie à même de correspondre exactement à vos besoins.</p>
          
            <h1 className="title " >2 Nous Sommes Une Startup Prometteuse </h1>
            <p className = "paragraphe " >Besoincvcnndfhhffdhfhf d'automatiser ou de digitaliser certaines des activités chronophages de votre entreprise? Qu'il s'agisse de logiciels de bureau, d'applications web, d'application mobiles ou de toute autre technologie à même de correspondre exactement à vos besoins.</p>
          
            <h1 className="title " >3 Nous Sommes Une Startup Prometteuse </h1>
            <p className = "paragraphe " >Bcvcvcesoin d'automatiser ou de digitaliser certaines des activités chronophages de votre entreprise? Qu'il s'agisse de logiciels de bureau, d'applications web, d'application mobiles ou de toute autre technologie à même de correspondre exactement à vos besoins.</p>
           
            <Button text={"Nous contacter"}></Button>
            <Link className='contact-link'>Nos projets</Link>
            <div className="slide-progress">
            <span className ='progress-1'></span>
            </div>
       
        </div>

        <div className="slide-img">
            <div className="slide-img1 config1-div1"></div>
            <div className="slide-img2 config1-div2"></div>
            <div className="slide-img3 config1-div3 "></div>

        </div>

       

    </div>
    </>

    
  )
}
