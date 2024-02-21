import React, { Fragment } from 'react'
import Header from './Components/Layout/Header'
import MetaData from './Components/Layout/MetaData'

function Design() {
  return (
    <Fragment>
    <MetaData title={"Register Farmer"} />
   
    <section className="flex  bg-white h-screen">
      
         <Header />
  
      <div className="lg:grid flex overflow-y-scroll flex-grow justify-center items-center lg:min-h-screen lg:grid-cols-12 ">
      <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-1 lg:h-full lg:w-full xl:col-span-12">
            <img
              alt="Night"
              src="images/6.png"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <a className="block text-white" href="/">
                <span className="sr-only">Home</span>
                <svg
                  className="h-8 sm:h-10"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                ></svg>
              </a>

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to Agriconnect 🌾
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>
          </section>
      </div>
      </section>
      </Fragment>
  )
}

export default Design