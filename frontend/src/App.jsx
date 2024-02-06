import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Components/Home';
import Header from './Components/Layout/Header'
import Login from './Components/User/Login';
import Register from './Components/User/Register';

function App() {
 

  return (
         <Router>
      
          <Routes>
            <Route path="/" element = {<Home />}/>
            <Route path="/login" element={<Login />}  exact="true" />
            <Route path="/register" element={<Register />} />
          </Routes>

         </Router>
  )
}

export default App
