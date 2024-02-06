import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Layout/Header";

function Register() {
  return (
    <div>
    <div className="flex bg-white h-screen">
      <div className="w-full md:w-1/6">
        <Header />
      </div>

      {/* Add your Register content here */}
      <div className="w-full md:w-5/6">
        {/* Your Register form or content */}
      </div>
    </div>
  </div>
  )
}

export default Register