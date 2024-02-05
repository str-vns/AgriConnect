import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Components/Home';
import Header from './Components/Layout/Header'
function App() {
 

  return (
         <Router>
           <Header />
          <Routes>
            <Route path="/" element = {<Home />}/>


          </Routes>

         </Router>
  )
}

export default App
