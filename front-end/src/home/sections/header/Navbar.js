import React from 'react'
import {Link} from 'react-router-dom'
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

    console.log('hello')
  }

  return (
    <div className = 'navbar'>

      <div className = 'logo'>
      <Link to={'/' }>
        <img src={logo}/>
      </Link>
      </div>

      <div className='navlink'>

        <ul >
          
            <li><Link to={''}>Accueil </Link></li>
         
          
            <li><Link to={''}>Formations</Link></li>
          
          
            <li><Link to={''}> Services  </Link></li>
         
          
            <li><Link to={''}>Nos Realistations </Link></li>
         

         
            <li>  <Link to={''}>Blog</Link></li>
          
          
            <li><Link to={''}>A propos </Link></li>
          

        </ul>

      </div>
      <Link to={'/contact'}><Button text ={'Nous contacter'}></Button></Link>
      
      <Menu clickEvent={toggleMenu}></Menu>


    </div>
  )
}
