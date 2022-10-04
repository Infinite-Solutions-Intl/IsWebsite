import React from 'react'
import Home from './home/Home';

import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
         <Route path='/' element ={<Home></Home>}/>
      </Routes>
    </Router>
  );
}

