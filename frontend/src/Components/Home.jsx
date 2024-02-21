import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Layout/Header";
import Mappy from "./Mapps/MappY"

const Home = () => {

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