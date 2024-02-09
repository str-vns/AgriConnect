import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Components/Home';
import Header from './Components/Layout/Header'
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import FarmRegister from './Components/User/FarmRegister';
import UserRegister from './Components/User/UserRegister';

function App() {
 

  return (
         <Router>
      
          <Routes>
            <Route path="/" element = {<Home />}/>
            <Route path="/login" element={<Login />}  exact="true" />
            <Route path="/register" element={<Register />} />
            <Route path="/userRegister" element={<UserRegister/>}/>
            <Route path="/farmerRegister" element={<FarmRegister/>}/>
          </Routes>

         </Router>
  )
}

export default App
