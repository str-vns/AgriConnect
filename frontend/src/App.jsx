import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Components/Home';
import Info from './Components/Info';
import Cards from './Components/Cards';
import Header from './Components/Layout/Header'
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import FarmRegister from './Components/User/FarmRegister';
import UserRegister from './Components/User/UserRegister';
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";
import axios from 'axios';
//new
import UpdatePassword from "./Components/User/UpdatePassword";
import ForgotPassword from "./Components/User/ForgotPassword";
import NewPassword from "./Components/User/NewPassword";
import ProCard from "./Components/Farmers/ProCard";
//end

import Analytics from './Components/Admin/Analytics';
import "react-toastify/dist/ReactToastify.css";
import FarmerLocation from './Components/User/FarmerLocation';
import { useState } from 'react';
import Test from './Test';
import Dashboard from './Components/Farmers/Dashboard';
import FarmerInfo from './Components/Farmers/FarmerInfo';
import ListReviews from './Components/Review/ListReviews';

import AdminDashboard from './Components/Admin/AdminDashboard';

import FarmerList from './Components/Admin/FarmerList';
import FarmerUpdate from './Components/Admin/FarmerUpdate';
import UserList from './Components/Admin/UserList';
import AdminProfile from './Components/Admin/AdminProfile';
import UpdateProfileAdmin from './Components/Admin/UpdateProfileAdmin';

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

import BankMap from './Components/Mapps/BankMap';
import BankCreate from './Components/Admin/BankCreate';
import BankList from './Components/Admin/BankList';
import BankUpdate from './Components/Admin/BankUpdate';
import ReviewList from './Components/Farmers/ReviewLog'
// import One from './Components/Farmers/Categories/Details/One';

//Accounts
import Accountslist from "./Components/Admin/Accountslist";
import AccountUpdate from "./Components/Admin/AccountUpdate";
import CreateProduct from './Components/Products/CreateProduct';
import ProductList from './Components/Products/ProductList';
import UpdateProducts from './Components/Products/UpdateProducts';
import ProductDetails from './Components/Products/detail/ProductDetail';
import Carts from './Components/Cart/Carts';
import ConfirmOrder from './Components/Cart/ConfirmOrder';

import TransactionFarmerList from './Components/Transaction/TransactionFarmerList';
import TransactionDetails from './Components/Transaction/TransactionDetails'
import TransactionUserList from './Components/Transaction/TransactionUserList';
import TransactionDetailsUser from './Components/Transaction/TranasctionDetailsUser'
import FarmerLocUpdate from './Components/User/FarmerLocUpdate';
function App() {
  

  const [state, setState] = useState({
    cartProducts:
      localStorage.getItem("cartProducts") &&
      localStorage.getItem("cartProducts") !== "undefined"
        ? JSON.parse(localStorage.getItem("cartProducts"))
        : [],
  });

  const addCart = async (id, quantity) => {
    console.log(id, quantity);
    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/v1/product/${id}`
      );
      const item = {
        product: data.product._id,
        name: data.product.name,
        image: data.product.images[0].url,
        stock: data.product.stock,
        quantity: quantity,
        farmerid: data.product.user
      };
      const ifItem = state.cartProducts.find((i) => i.product === item.product);
      console.log(ifItem, state);
      if (ifItem) {
        setState({
          ...state,
          cartProducts: state.cartProducts.map((i) =>
            i.product === ifItem.product ? item : i
          ),
        });
      } else {
        setState({
          ...state,
          cartProducts: [...state.cartProducts, item],
        });
      }

      toast.success("Item Added", {
        position: "top-right",
      });
    } catch (error) {
      console.log(error);
      toast.error("Item Not Added", {
        position: "top-right",
      });
    }
  };



  const removeCart = async (id) => {
    setState({
      ...state,
      cartProducts: state.cartProducts.filter((i) => i.product !== id),
    });
  };


  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/cards" element={<Cards />} />
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
        <Route path='/farmerLocUpdate/:id' element={<FarmerLocUpdate/>}/>
        <Route path='/farmerDashboard' element={<ProtectedRoute isFarmer={true}><Dashboard/></ProtectedRoute>}/>
        <Route path='/AdminDashboard' element={<ProtectedRoute isAdmin={true}><AdminDashboard/></ProtectedRoute>}/>
        <Route path="/AdminProfile" element={<AdminProfile />} />
          <Route
            path="/profile/admin/update"
            element={<UpdateProfileAdmin />}
            exact="true"
          />
        <Route path='/farmerlist' element={<FarmerList/>} />
        <Route path='/farmerupdate/:id' element={<ProtectedRoute isAdmin={true}><FarmerUpdate/></ProtectedRoute>} exact="true" />

        <Route path='/userlist' element={<UserList/>} />
         <Route path='/reviewLog' element={<ReviewList/>}/>

        <Route path='/UserDashboard' element={<ProtectedRoute isUser={true}><UserDashboard/></ProtectedRoute>}/>
        
        <Route path="/user/:id" element={<UserProfile />} />
        <Route
          path="/profile/update"
          element={<UpdateProfile />}
          exact="true"
        />

        <Route path="/government" element={<Government />} />
        <Route path="/information" element={<Information />} />
        <Route path="/Card" element={<ProCard />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/bankCreate" element={<ProtectedRoute isAdmin={true}><BankCreate/></ProtectedRoute>} exact="true"/>
        <Route path="/banklist" element={<ProtectedRoute isAdmin={true}><BankList/></ProtectedRoute>} exact="true"/>
        <Route path='/bankupdate/:id' element={<ProtectedRoute isAdmin={true}><BankUpdate/></ProtectedRoute>} exact="true" />
       
        <Route path="/AccountList" element={<ProtectedRoute isAdmin={true}><Accountslist /></ProtectedRoute>} exact="true" />
        <Route path="/AccountUpdate/:id" element={<ProtectedRoute isAdmin={true}><AccountUpdate /></ProtectedRoute>} exact="true" />
        
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


        <Route path='/createProduct'element={<CreateProduct/>}/>
        <Route path='/productList' element={<ProductList/>}/>
        <Route path="/updateProduct/:id" element={<UpdateProducts/>}/>
        <Route path="/product/:id" element={<ProductDetails cartProducts={state.cartProducts} addCart={addCart}/>} exact="true" />

        <Route path="/cart" element={<Carts cartProducts={state.cartProducts} addCart={addCart} removeCart={removeCart}/> } exact="true" />
        <Route path="/confirm" element={<ConfirmOrder cartProducts={state.cartProducts}/>} exact="true"/>
        <Route path="/orders" element={<TransactionFarmerList/>}/>
        <Route path="/OrderProcess/:id" element={<TransactionDetails />}/>
        <Route path="/orderList" element={<TransactionUserList/>}/>
        <Route path="/SingleOrder/:id" element={<TransactionDetailsUser/>}/>

        
       </Routes>
    </Router>

    
  );
}

export default App
