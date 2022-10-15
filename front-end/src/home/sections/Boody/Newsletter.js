import React, { useState } from 'react'

export default function Newsletter() {

  const [email , setEmail]=useState('') ;
  const submitForm = async ()=>{

  }

  const handleInput =(e)=>{
        e.preventDefault() ;
        setEmail(e.target.value)
  }
  
  return (
    <div className='newsletter'>
        <div className='text'>
            <h3> Join our Newsletter</h3>
            <p>Nous serons ravis de vous apportez notre exprérience pour l’accomplissement de votre projet.</p>
        </div>
        <div className='input-bloc'>
          <form onSubmit={submitForm}>
           <input onChange={handleInput} type='text' value={email} placeholder='envoyer votre mail'></input>
            <button type='submit'> Envoyer</button>
          </form>

        </div>
    </div>
  )
}
