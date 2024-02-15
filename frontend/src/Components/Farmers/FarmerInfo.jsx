import React, { Fragment } from 'react'
import MetaData from '../Layout/MetaData'
import Header from '../Layout/Header'
import ListReviews from '../Review/ListReviews'
function FarmerInfo() {
  return (
 <Fragment>
    <MetaData title={"Farmer Information"} />
   
   <section className="flex  bg-white h-screen">
       
   <Header />
 
     <div className="lg:grid  flex flex-grow overflow-y-scroll justify-center items-center lg:min-h-screen ">
        
<div class=" py-8   flex flex-wrap items-center  justify-center  ">
            <div class="container rounded-lg lg:w-5/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
                <div class=" h-48  overflow-hidden" >
                    <img class="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                </div>
                <div class="flex justify-right px-5 items-end -mt-12">
                    <img class="h-32 w-32 bg-white p-2 ring-2 ring-black rounded-full" src="/images/default_avatar.jpg" alt="" />
                    <div class="mt-14 ml-14">
                        <h2 class="text-gray-800 text-3xl font-bold">Mohit Dhiman</h2>
                        <a class="text-gray-400 mt-2 hover:text-blue-500" href="https://www.instagram.com/immohitdhiman/" target="BLANK()">@immohitdhiman</a>
                    </div>
                </div>
                <div >
                <h1> Product</h1>
                <ul className="mt-8 m-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    
      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-72 w-72 px-3 w-full object-cover transition duration-500 group-hover:scale-105 "
          />

          <div className="relative bg-white pt-3">
            <h3 className="text-xs ml-3 text-gray-700 group-hover:underline group-hover:underline-offset-4">
              Basic Tee
            </h3>

            
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-72 w-72 px-3 w-full object-cover transition duration-500 group-hover:scale-105 "
          />

          <div className="relative bg-white pt-3">
            <h3 className="text-xs ml-3 text-gray-700 group-hover:underline group-hover:underline-offset-4">
              Basic Tee
            </h3>

            
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-72 w-72 px-3 w-full object-cover transition duration-500 group-hover:scale-105 "
          />

          <div className="relative bg-white pt-3">
            <h3 className="text-xs ml-3 text-gray-700 group-hover:underline group-hover:underline-offset-4">
              Basic Tee
            </h3>

            
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-72 w-72 px-3 w-full object-cover transition duration-500 group-hover:scale-105 "
          />

          <div className="relative bg-white pt-3">
            <h3 className="text-xs ml-3 text-gray-700 group-hover:underline group-hover:underline-offset-4">
              Basic Tee
            </h3>

            
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-72 w-72 px-3 w-full object-cover transition duration-500 group-hover:scale-105 "
          />

          <div className="relative bg-white pt-3">
            <h3 className="text-xs ml-3 text-gray-700 group-hover:underline group-hover:underline-offset-4">
              Basic Tee
            </h3>

            
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-72 w-72 px-3 w-full object-cover transition duration-500 group-hover:scale-105 "
          />

          <div className="relative bg-white pt-3">
            <h3 className="text-xs ml-3 text-gray-700 group-hover:underline group-hover:underline-offset-4">
              Basic Tee
            </h3>

            
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-72 w-72 px-3 w-full object-cover transition duration-500 group-hover:scale-105 "
          />

          <div className="relative bg-white pt-3">
            <h3 className="text-xs ml-3 text-gray-700 group-hover:underline group-hover:underline-offset-4">
              Basic Tee
            </h3>

            
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-72 w-72 px-3 w-full object-cover transition duration-500 group-hover:scale-105 "
          />

          <div className="relative bg-white pt-3">
            <h3 className="text-xs ml-3 text-gray-700 group-hover:underline group-hover:underline-offset-4">
              Basic Tee
            </h3>

            
          </div>
        </a>
      </li>

      
      </ul>
      <h1> COmment</h1>
      <ListReviews/>
      
                    <hr class="mt-6" />  
                    <div class="flex  bg-gray-50 ">
                        <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                            <p><span class="font-semibold">2.5 k </span> Followers</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        </div>
        </section>
  </Fragment>
  )
}

export default FarmerInfo