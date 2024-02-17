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
      class="absolute inset-0 h-full w-full object-cover opacity-100 "
    />
  </div>

  <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
    
    <h3 class="text-xl font-medium text-black">User</h3>

<p class="mt-1.5 text-pretty text-xs text-black">
  Welcome to the User's Register your digital companion in the world of agriculture
</p>
     <Link to="/userRegister">
    <div class="flex justify-center">
  <span class="mt-3 inline-block rounded-lg bg-black px-5 py-3  text-sm font-medium text-white hover:bg-white hover:text-black hover:border-black border-2">
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
      class="absolute inset-0 h-full w-full object-cover opacity-100 "
    />
  </div>

  <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
  <h3 class="text-xl font-medium text-black">Farmer</h3>

<p class="mt-1.5 text-pretty text-xs text-black">
Welcome to the Farmer's Register  your digital companion in the world of agriculture
</p>

    <Link to="/farmerRegister">
    <span
      class="mt-3 inline-block rounded-lg bg-black px-5 py-3  text-sm font-medium text-white hover:bg-white hover:text-black hover:border-black border-2"
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