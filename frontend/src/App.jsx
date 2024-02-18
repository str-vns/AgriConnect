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
import Dashboard from './Components/Farmers/Dashboard';
import FarmerInfo from './Components/Farmers/FarmerInfo';
import ListReviews from './Components/Review/ListReviews';
import UpdatePassword from "./Components/User/UpdatePassword";
import ForgotPassword from "./Components/User/ForgotPassword";
import NewPassword from "./Components/User/NewPassword";

import Government from './Components/Farmers/Government';
import Information from './Components/Farmers/Information';
import Categories from './Components/Farmers/Categories';

import First from './Components/Farmers/Categories/First';
import Second from './Components/Farmers/Categories/Second';
import Third from './Components/Farmers/Categories/Third';
import Fourth from './Components/Farmers/Categories/Fourth';

import One from './Components/Farmers/Categories/Details/First/One';
import Two from './Components/Farmers/Categories/Details/First/Two';
import Three from './Components/Farmers/Categories/Details/First/Three';

import SecondO from './Components/Farmers/Categories/Details/Second/SecondO';
import SecondT from './Components/Farmers/Categories/Details/Second/SecondT';
import SecondH from './Components/Farmers/Categories/Details/Second/SecondH';

import THIRDONE from './Components/Farmers/Categories/Details/Third/third_one';
import THIRDTWO from './Components/Farmers/Categories/Details/Third/third_two';
import THIRDTHREE from './Components/Farmers/Categories/Details/Third/third_three';

import FOURTHONE from './Components/Farmers/Categories/Details/Fourth/fourth_one';
import FOURTHTWO from './Components/Farmers/Categories/Details/Fourth/fourth_two';
import FOURTHTHREE from './Components/Farmers/Categories/Details/Fourth/fourth_three';
import ProtectedRoute from './Components/Route/ProtectedRoute';
// import One from './Components/Farmers/Categories/Details/One';

function App() {
  
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
        <Route path="/farmerRegister" element={<FarmRegister/>} />
        <Route path="/farmerLocation" element={<FarmerLocation />} />
        <Route path="/test" element={<Test/>}/>
        <Route path="/farmerInfo" element={<FarmerInfo/>}/>
        <Route path='/reviewfarmer' element={<ListReviews/>} />
        <Route path='/farmerDashboard' element={<ProtectedRoute isFarmer={true}><Dashboard/></ProtectedRoute>}/>

        <Route path="/government" element={<Government />} />
        <Route path="/information" element={<Information />} />
        <Route path="/categories" element={<Categories />} />

        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/fourth" element={<Fourth />} />

        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />

        <Route path="/secondo" element={<SecondO />} />
        <Route path="/secondt" element={<SecondT />} />
        <Route path="/secondh" element={<SecondH />} />

        <Route path="/thirdone" element={<THIRDONE />} />
        <Route path="/thirdtwo" element={<THIRDTWO />} />
        <Route path="/thirdthree" element={<THIRDTHREE />} />
       
        <Route path="/fourthone" element={<FOURTHONE />} />
        <Route path="/fourthtwo" element={<FOURTHTWO />} />
        <Route path="/fourththree" element={<FOURTHTHREE />} />
      </Routes>
    </Router>
  );
}

export default App
