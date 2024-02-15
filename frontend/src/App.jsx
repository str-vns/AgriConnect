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
import FarmerInfo from './Components/Farmers/FarmerInfo';
import ListReviews from './Components/Review/ListReviews';
import UpdatePassword from "./Components/User/UpdatePassword";
import ForgotPassword from "./Components/User/ForgotPassword";
import NewPassword from "./Components/User/NewPassword";

import Government from './Components/Farmers/Government';
import Information from './Components/Farmers/Information';
import First from './Components/Farmers/Categories/First';


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
        <Route path="/password/forgot" element={<ForgotPassword />} exact="true" />
        <Route path="/password/reset/:token" element={<NewPassword />} exact="true"/>
        <Route path="/password/update" element={<UpdatePassword />} exact="true"/>
        <Route path="/userRegister" element={<UserRegister />} />
        <Route path="/farmerRegister" element={<FarmRegister farmerInfo={state.farmCollection} saveFarmerRegister={saveFarmerRegister} />} />
        <Route path="/farmerLocation" element={<FarmerLocation farmCollection={state.farmCollection} />} />
        <Route path="/test" element={<Test/>}/>
        <Route path="/farmerInfo" element={<FarmerInfo/>}/>
        <Route path='/reviewfarmer' element={<ListReviews/>} />

        <Route path="/government" element={<Government />} />
        <Route path="/information" element={<Information />} />
        <Route path="/first" element={<First />} />
      </Routes>
    </Router>
  );
}

export default App
