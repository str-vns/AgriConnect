import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Layout/Header";

function Register() {
  return (
    <div>
    <div className="flex bg-white h-screen ">
      <div className="w-full md:w-1/6">
        <Header />
      </div>

     
      <div className=" mx-7 w-full mt-24 md:w-2/6 grid-cols-2 ">
      <a href="#" class="group relative block">
  <div class="relative h-[450px] sm:h-[450px] ">
    <img
      src="images/User.png"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />
  </div>

  <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
    <h3 class="text-xl font-medium text-white">Farmer</h3>

    <p class="mt-1.5 text-pretty text-xs text-white">
    Welcome to the Farmer's Register  your digital companion in the world of agriculture
    </p>
     <Link to="/userRegister">
    <div class="flex justify-center">
  <span class="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
    Register
  </span>
</div>

    </Link>
  </div>
  
</a>
      </div>

      <div className="w-full mt-24 md:w-2/6 grid-cols-2 ">
      <a href="#" class="group relative block ">
  <div class="relative h-[450px] sm:h-[450px]">
    <img
      src="images/farmer.png"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />
  </div>

  <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
    <h3 class="text-xl font-medium text-white">User</h3>

    <p class="mt-1.5 text-pretty text-xs text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit
      aperiam ipsum!
    </p>
    <Link to="/farmerRegister">
    <span
      class="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
    >
      Register
    </span>
    </Link>
  </div>
  
</a>
      </div>

      
    </div>
    
  </div>

  
  )
}

export default Register