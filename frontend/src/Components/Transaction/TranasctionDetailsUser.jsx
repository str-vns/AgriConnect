import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import MetaData from '../Layout/MetaData'
import Loader from '../Layout/Loader'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getToken } from '../../Utilitys/helpers'
import Header from '../Layout/Header'

const TranasctionDetailsUser = () => {

 const [status, setStatus] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [order, setOrder] = useState({})
    let { id } = useParams();

    const getOrderDetails = async (id) => {
        try {

            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${getToken()}`
                }
            }

            const { data } = await axios.get(`http://localhost:4000/api/v1/order/${id}`, config)
            setOrder(data.order)
            console.log(data.order)
            setLoading(false)
        } catch (error) {
            setError(error.response.data.message)
        }
    }

    useEffect(() => {
        getOrderDetails(id)

        if (error) {
            toast.error(error, {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }
    }, [error, id])

    const updateOrderHandler = (id) => {
        const formData = new FormData();
        formData.set('status', status);
        // up
        dateOrder(id, formData)
    }
    const processingStatus = order.orderItems && order.orderItems.some(orderItem => orderItem.orderStatus === 'Processing');
    const shippedStatus = order.orderItems && order.orderItems.some(orderItem => orderItem.orderStatus === 'Shipped');
console.log
    return (
        <Fragment>
            <MetaData title={'Order Details'} />
            <div className="flex  bg-white  h-screen  ">
          <div className=" ">
                  <Header />
              </div>
            {loading ? <Loader /> : (
                <Fragment>
                    
                <div className="flex justify-center w-full bg-white py-10">
  <div className="order-details border-2 border-black p-10">
   

                          <h1 className="my-5 text-black">Order # {order._id}</h1>

                

                          <div className="flex items-center my-4">
    <h4 className='text-black'>Order Status:</h4>
    <p className={`ml-2 ${processingStatus ? "text-blue-600" : (shippedStatus ? "text-yellow-500" : "text-green-600")}`}>
        <b>{processingStatus ? "Processing" : (shippedStatus ? "Shipped" : "Delivered")}</b>
    </p>
</div>


                          <h4 className="my-4 border-t-2 border-black text-black">Order Items:</h4>
                          
       
                          <div className="cart-item my-1">
  {order.orderItems && order.orderItems.map(item => (
    
      <div key={item.product} className="flex border-b-2 border-black mb-4 pb-4">
        
          <div className="w-1/4 ">
              <img src={item.image} alt={item.name} className="w-20 h-20" />
          </div>

          <div className=" pl-4 flex flex-col justify-between">
              <Link  className="text-lg font-bold text-black ">{item.name}</Link>
              <p className="text-sm text-black">{item.quantity} Piece(s)</p>
              
          </div>
          <div className=" pl-7 justify-center items-center">
              <p className="text-sm text-black ">OrderStatus: {item.orderStatus}</p>
          </div>
         
      </div>
  ))}
</div>


                            
                     
                    </div>
                      </div>
                      
                
           
              </Fragment>
            )}
</div>
        </Fragment>
  )
}

export default TranasctionDetailsUser