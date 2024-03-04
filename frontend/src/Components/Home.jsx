import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Layout/Header";
import Mappy from "./Mapps/MappY"

const Home = ({cartProducts}) => {
 
  
  return (
    
    <div className="flex">

    <Header cartProducts/>

  <div className=" w-full">
   <Mappy />

  </div>
  
</div>
  );
};

export default Home;