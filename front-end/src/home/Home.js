import React from 'react'
import Header from './sections/header/header'
import '../css/index.css'
import '../css/navbar.css'
import '../css/heros.css'
import '../css/body.css'
import '../css/presentation.css'
import Body from './sections/Boody/Body'


export default function Home() {
  return (
    <div className = 'container'>
        <Header></Header>
        <Body></Body>
    </div>
  )
}
