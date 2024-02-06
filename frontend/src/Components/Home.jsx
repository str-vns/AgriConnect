import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Layout/Header";
const Home = () => {

  return (
    <div className="bg-white">
      <Header />
    </div>
  );
};

export default Home;