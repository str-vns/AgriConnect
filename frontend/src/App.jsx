import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Components/Home';
import Header from './Components/Layout/Header'
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import FarmRegister from './Components/User/FarmRegister';
import UserRegister from './Components/User/UserRegister';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import FarmerLocation from './Components/User/FarmerLocation';
import { useState } from 'react';
import Test from './Test';

function App() {
  const [state, setState] = useState({
    farmCollection: localStorage.getItem('farmCollection')
      ? JSON.parse(localStorage.getItem('farmCollection'))
      : {}
  });

  const saveFarmerRegister = async (data) => {
    console.log(data)
    setState({ ...state, farmCollection: data });
    localStorage.setItem('farmCollection', JSON.stringify(data));
  }
  console.log(state.farmCollection);
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} exact="true"/>
        <Route path="/register" element={<Register />} />
        <Route path="/userRegister" element={<UserRegister />} />
        <Route path="/farmerRegister" element={<FarmRegister farmerInfo={state.farmCollection} saveFarmerRegister={saveFarmerRegister} />} />
        <Route path="/farmerLocation" element={<FarmerLocation farmCollection={state.farmCollection} />} />
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </Router>
  );
}

export default App
