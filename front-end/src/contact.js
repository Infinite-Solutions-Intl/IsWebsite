import React, { useState } from 'react'
import Footer from './home/sections/footer/footer'
import Navbar from './home/sections/header/Navbar'
import './css/contact.css'



export  function InfoItems({image , text}) {
  return (
    <div className='infoItem'>
        <img src={image}></img> 
        <span>{text}</span>
    </div>
  )
}

export default function Contact() {

    const [contactInput , setContactInput ] = useState({
      name:'',
      phone:'',
      email:'',
        comment: '' ,
})

    const handleInput =(e)=>{
      e.preventDefault() ;
 
    setContactInput((contactInput)=>{
      return {...contactInput, [e.target.name]:e.target.value}
    });
    
}

    
  return (

    <div className='container'>
        <Navbar></Navbar>
        <div className='contact'>

            <div className='contact-text'>
            <div className='green-square'>
            </div>
            <h1>Prenez contact avec nous </h1>
              <p>Nous serions ravis de discuter de 
                la manière dont nous pouvons vous aider.
              </p>

              <div className='infos'>
                <div>

                </div>
              </div>
            </div>
            <div className='contact-form'>
              <form>
                <input name ="name" onChange={handleInput} type='text' placeholder='Nom' value={contactInput['name']}></input>
                <input name ="email" onChange={handleInput} type='email' placeholder='Adress Mail' value={contactInput['email']}></input>
                <input name ="phone" onChange={handleInput}  type='tel' placeholder='Telephone' value={contactInput['phone']}></input>
                <textarea name='comment' onChange={handleInput} placeholder='votre message' value={contactInput['comment']}/>
              </form>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}
