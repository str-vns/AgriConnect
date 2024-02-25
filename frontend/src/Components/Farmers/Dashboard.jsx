import React, { Fragment } from 'react'
import MetaData from '../Layout/MetaData'
import Header from '../Layout/Header'
const Dashboard = () => {
  return (
    <Fragment>
    <MetaData title={"Register Farmer"} />
   
    <section className="flex  bg-white h-screen">
      
        <Header />
  
      <div className="lg:grid flex overflow-y-scroll flex-grow justify-center items-center lg:min-h-screen lg:grid-cols-12 ">
        
      </div>
      </section>
      </Fragment>
  )
}

export default Dashboard