import React, { useState , useLayoutEffect, useEffect ,useRef } from 'react' ;

import { Link } from 'react-router-dom' ;
import { Button } from '@mui/material';
import Typed from "typed.js";
import Aos from 'aos';
import { createTheme } from '@mui/material/styles';



export default function Heros() {

    const title = useRef(null);
    let h1 = <h1 data-aos="fade-up"
    data-aos-duration="300" ref={title}> </h1> ;

    let  [config , setConfig]= useState(1);

    const titles =[ 'Nous Sommes une Startup Inovente' ,
                 'Nous Concevons Des Solutions Inoventent ' ,
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

             
            } ,7000)

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

              h1 =   <h1 data-aos="fade-up" data-aos-duration="4000" ref={title}> </h1> 

                
            }

            else if(config ===2){
               
                setHerotext(texts[1])


                images.classList.add('config2')
                images.classList.remove('config1' , 'config3')

                progress.classList.add('progress-2')
                progress.classList.remove('progress-1' , 'progress-3')
                Aos.refreshHard();
                h1 =   <h1 data-aos="fade-down" data-aos-duration="4000" ref={title}> </h1> 

              
            }

            else{

                setHerotext(texts[2])
                images.classList.add('config3' , )
                images.classList.remove('config1' , 'config2')

                progress.classList.add('progress-3')
                progress.classList.remove('progress-1' , 'progress-2')
                

            }
            
       
         } , [config])
         

    


         useEffect(() => {


           const typed = new Typed(title.current, {
             strings: [titles[config-1]], 
             typeSpeed: 50,
             backSpeed: 50,
            
             showCursor: true,
             cursorChar: ""
           });
       
           // Destropying
           return () => {
             typed.destroy();
             h1=<></>
             console.log(h1)
           };
         }, [config]);
       
         
const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#09d1f1',
        darker: '#053e85',
      },
      neutrall: {
        main: '#64548B',
        contrastText: '#fff',
      },
    },
  });

         
         return (
      <>
      <div className='heros-container'  data-aos="fade-left" data-aos-duration="1000" >

            <div className="heros">
                <div className="slide-text" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1000" >

                    {h1}
                   <p className = "paragraphe">{heroText}</p>
                   <span  data-aos="fade-right" data-aos-duration="2000" data-aos-delay="3000" >
                    
                     <Button variant="contained" color="primary" >Nous contacter</Button>
                   
                    <Link className='contact-link'>
                       <Button> Nos projets</Button> 
                    </Link>
                    </span>
                    <div className="slide-progress">
                    <span className ='progress-1'></span>
                    </div>
            
                </div>

                <div className="slide-img"  data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1000" >
                    <div className="slide-img1 config1-div1"></div>
                    <div className="slide-img2 config1-div2"></div>
                    <div className="slide-img3 config1-div3 "></div>

                </div>

                

            </div>
    
    </div>
    </>

    
  )
}
