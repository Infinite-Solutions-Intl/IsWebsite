import React, { useState , useLayoutEffect, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../component/buttons'
import Typed from 'react-typed';



export default function Heros() {



    let  [config , setConfig]= useState(1);

    const titles =[ 'Nous Sommes une Startup Inovente' ,
                 'Nous Concevons Des Solutions Inoventent pour votre Devellopement' ,
                 'Votre Partenaire Ideale Pour Votre Croissance' ,
                ]

    
        let texts =[
            'Besoin d\'automatiser ou de digitaliser certaines .' ,
            'Besoincvcnndfhhffdhfhf d\'automatiser ou de .',
            'Besoin d\'automatiser ou de digitaliser certaines des activités',
        ] 



        let [heroText , setHerotext] = useState('');
     


    useLayoutEffect(()=>{
            const  timer=setInterval(()=>{
                
                if (config === 1) {
                    setConfig(2)
                    
                } else if(config === 2) {
                    setConfig(3)
                    
                }
                else{
                    setConfig(1)
                }

             
            } ,2000)

            return ()=>{
                clearInterval(timer)
            }
    
        } , [config])
            
    
        useLayoutEffect(()=>{

            const images = document.querySelector('.slide-img')
            const progress =document.querySelector('.slide-progress span')

            if(config ===1){

                setHerotext(texts[0])

                images.classList.add('config1')
                images.classList.remove('config2' , 'config3')

                progress.classList.add('progress-1')
                progress.classList.remove('progress-2' , 'progress-3')

                
            }

            else if(config ===2){
               
                setHerotext(texts[1])

                images.classList.add('config2')
                images.classList.remove('config1' , 'config3')

                progress.classList.add('progress-2')
                progress.classList.remove('progress-1' , 'progress-3')

              
            }

            else{

                setHerotext(texts[2])
                images.classList.add('config3' , )
                images.classList.remove('config1' , 'config2')

                progress.classList.add('progress-3')
                progress.classList.remove('progress-1' , 'progress-2')

            }
            
       
         } , [config])
         
         return (
      <>
      <div className='heros-container'   >

            <div className="heros">
                <div className="slide-text">

                        <h1 id='title'></h1>
                   <p className = "paragraphe">{heroText}</p>
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
    
    </div>
    </>

    
  )
}
