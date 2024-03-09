import React, { Fragment, useEffect, useState } from 'react'
import MetaData from '../Layout/MetaData'
import Header from '../Layout/Header'
import { getToken } from '../../Utilitys/helpers'
import axios from 'axios'
import DMonthlyProducts from './Analytics/DMonthlyProducts'
import ProductCard from './ProCard'
import { Link } from 'react-router-dom'
const Dashboard = () => {
  const [stock, setStock ] = useState(0)

  return (
    <Fragment>
    <MetaData title={"Register Farmer"} />
   
    <section className="flex  bg-white h-screen">
    <div className="bg-white w-full bg-white md:w-1/6">
          <Header />
        </div>
  
      <div className="lg:grid flex overflow-y-scroll flex-grow justify-center items-center lg:min-h-screen  ">
    
      <div className="">
        
      <section style={{ overflowY: 'scroll', maxHeight: '500px' }}>
  <ProductCard />
</section>

        
                {/* <h6 className=" ml-20 text-black text-center font-bold">Product Revenue</h6> */}
        <DMonthlyProducts/>
        </div>
      </div>
      </section>
      </Fragment>
  )
}

export default Dashboard