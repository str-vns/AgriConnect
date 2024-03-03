import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Layout/Header";
import Mappy from "./Mapps/MappY"

const Home = () => {
  
  const [state, setState] = useState({
    cartProducts:
      localStorage.getItem("cartProducts") &&
      localStorage.getItem("cartProducts") !== "undefined"
        ? JSON.parse(localStorage.getItem("cartProducts"))
        : [],
  });
  
  return (
    
    <div className="flex">

    <Header />

  <div className=" w-full">
   <Mappy />

  </div>
  
</div>
  );
};

export default Home;