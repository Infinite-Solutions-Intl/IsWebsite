import React, { useEffect, useLayoutEffect } from 'react'
import Heros from './Heros'
import Navbar from './Navbar'


export default function Header() {


  
  return (
    <div className='header'>
        <Navbar></Navbar>
        <Heros></Heros>

    </div>
  )
}
