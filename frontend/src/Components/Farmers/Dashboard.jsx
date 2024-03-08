import React, { Fragment, useEffect } from 'react'
import MetaData from '../Layout/MetaData'
import Header from '../Layout/Header'
import { getToken } from '../../Utilitys/helpers'
import axios from 'axios'
import DMonthlyProducts from './Analytics/DMonthlyProducts'
const Dashboard = () => {
//   const getLocationFarmer = async () => {
//     const config = {
//         headers: {
//             'Authorization': `Bearer ${getToken()}`
//         }
//     }
//     try {
//         const { data } = await axios.get(`http://localhost:4000/api/v1/specific`, config)
//         console.log(data)
      
//         setLoading(false)
//     } catch (error) {
//        console.log(error)
//     }
// }

// useEffect(() => {
//   getLocationFarmer()

// }, [])
  return (
    <Fragment>
    <MetaData title={"Register Farmer"} />
   
    <section className="flex  bg-white h-screen">
      
        <Header />
  
      <div className="lg:grid flex overflow-y-scroll flex-grow justify-center items-center lg:min-h-screen  ">
      <div className="h-64">
                <h6 className=" ml-20 text-black text-center">Product Revenue</h6>
        <DMonthlyProducts/>
        </div>
      </div>
      </section>
      </Fragment>
  )
}

export default Dashboard