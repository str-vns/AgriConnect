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

//new
import UpdatePassword from "./Components/User/UpdatePassword";
import ForgotPassword from "./Components/User/ForgotPassword";
import NewPassword from "./Components/User/NewPassword";
//end

import "react-toastify/dist/ReactToastify.css";
import FarmerLocation from './Components/User/FarmerLocation';
import { useState } from 'react';
import Test from './Test';
import Dashboard from './Components/Farmers/Dashboard';
import FarmerInfo from './Components/Farmers/FarmerInfo';
import ListReviews from './Components/Review/ListReviews';

import Dashboard2 from './Components/Admin/Dashboard2';
import UserDashboard from './Components/User/UserDashboard';
import UserProfile from './Components/User/UserProfile';
import UpdateProfile from "./Components/User/UpdateProfile";


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
import Design from './Design';
import Messenger from './Components/Chatime/messenger/Messenger';
// import BankCreate from './Components/Admin/BankCreate';
import BankMap from './Components/Mapps/BankMap';
import BankCreate from './Components/Admin/BankCreate';
import BankList from './Components/Admin/BankList';
import BankUpdate from './Components/Admin/BankUpdate';
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
        <Route path="/password/reset/:token" element={<NewPassword />} exact="true" />
        <Route path="/password/update" element={<UpdatePassword />} exact="true"/>

        <Route path="/userRegister" element={<UserRegister />} />
        <Route path="/farmerRegister" element={<FarmRegister/>} />
        
        <Route path="/farmerLocation" element={<FarmerLocation />} />
        <Route path="/farmerInfo/:id" element={<FarmerInfo/>}/>
        <Route path='/reviewfarmer' element={<ListReviews/>} />

        <Route path='/farmerDashboard' element={<ProtectedRoute isFarmer={true}><Dashboard/></ProtectedRoute>}/>
        <Route path='/AdminDashboard' element={<ProtectedRoute isAdmin={true}><Dashboard2/></ProtectedRoute>}/>
        <Route path='/UserDashboard' element={<ProtectedRoute isUser={true}><UserDashboard/></ProtectedRoute>}/>
        
        <Route path="/user/:id" element={<UserProfile />} />
        <Route
          path="/profile/update"
          element={<UpdateProfile />}
          exact="true"
        />

        <Route path="/government" element={<Government />} />
        <Route path="/information" element={<Information />} />
        <Route path="/bankCreate" element={<ProtectedRoute isAdmin={true}><BankCreate/></ProtectedRoute>} exact="true"/>
        <Route path="/banklist" element={<ProtectedRoute isAdmin={true}><BankList/></ProtectedRoute>} exact="true"/>
        <Route path='/bankupdate/:id' element={<ProtectedRoute isAdmin={true}><BankUpdate/></ProtectedRoute>} exact="true" />

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

        <Route path="/messenger" element={<Messenger/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/design" element={<Design/>}/>
        <Route path="/Banky" element={<BankMap/>}/>
        
      </Routes>
    </Router>

    
  );
}

export default App
