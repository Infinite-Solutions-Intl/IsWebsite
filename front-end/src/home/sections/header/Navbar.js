import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import Button from '../../../component/buttons'
import Menu from '../../../component/menu'
import logo from '../../../assets/img/logo.png'
 
export default function 
() {

  const toggleMenu = ()=>{
    const navbar = document.querySelector(".navbar");
    const navlink = document.querySelector(".navlink");
    navlink.classList.toggle("mobile-navlink")
        const tiret1 = document.querySelector(".tiret1");
        tiret1.classList.toggle("mobile-tiret1")
    const tiret2 = document.querySelector(".tiret2");
    tiret2.classList.toggle("mobile-tiret2")

  }

      useEffect(()=>{
        const handleScroll = (e)=>{
          e.preventDefault() ;
          if(window.scrollY>800){
            document.querySelector('.navbar-container').classList.add('fixed') ;
          }
          else{
            document.querySelector('.navbar-container').classList.remove('fixed') ;
          }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);    
        };

      }, []);


  return (
    <div className = 'navbar-container' >

    <div className = 'navbar  navbar-container'>

      <div className = 'logo'>
      <Link to={'/' }>
        <img src={logo}/>
      </Link>
      </div>

      <div className='navlink'>

        <ul >
          
            <li><HashLink smooth to={'/'}>Accueil </HashLink></li>
         
          
            <li><HashLink smooth to={'/#formation'}>Formations</HashLink> </li>
          
          
            <li><HashLink smooth to={'/#services'}> Services  </HashLink></li>
         
          
            <li><HashLink smooth to={'/#realisations'}>Nos Realistations </HashLink></li>
         

         
            <li>  <HashLink smooth to={'/#newsletter'}>NewsLetter</HashLink></li>
          
          
            <li><HashLink smooth to={''}>A propos </HashLink></li>
          

        </ul>

      </div>
      <Link to={'/contact'}><Button text ={'Nous contacter'}></Button></Link>
      
      <Menu clickEvent={toggleMenu}></Menu>


    </div>

    
    </div>
  )
}
