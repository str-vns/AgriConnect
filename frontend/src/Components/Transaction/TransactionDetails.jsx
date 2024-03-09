import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import MetaData from "../Layout/MetaData";
import Loader from "../Layout/Loader";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getToken } from "../../Utilitys/helpers";
import Header from "../Layout/Header";

const OrderDetails = () => {
    const [status, setStatus] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [order, setOrder] = useState({})
    const [isUpdated, setIsUpdated] = useState(false)
    let { id } = useParams();
     const navigate = useNavigate()
    const orderId = id;
    const errMsg = (message = '') => toast.error(message, {
        position:"top-right"
    });
  
    const successMsg = (message = '') => toast.success(message, {
        position:"top-right"
    });

    const getOrderDetails = async (id) => {
        try {

            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${getToken()}`
                }
            }

            const { data } = await axios.get(`http://localhost:4000/api/v1/OrderProcess/${id}`, config)
            setOrder(data)
            console.log(data)
            console.log(data.items)
            setLoading(false)
        } catch (error) {
            setError(error.response.data.message)
        }
    }

    useEffect(() => {
        getOrderDetails(orderId)
        if (error) {
            errMsg(error);
            setError('')
        }
        if (isUpdated) {
            successMsg('Order updated successfully');
            setIsUpdated('')
            navigate('/orderList')
        }
    }, [error, isUpdated, orderId])

    const updateOrder = async (id, formData) => {
    
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getToken()}`
                }
            }
            const { data } = await axios.put(`http://localhost:4000/api/v1/OrderUpdate/${id}`, formData, config)
            setIsUpdated(data.success)
            console.log(data)
           windows.location.reload()
        } catch (error) {
            setError(error.response.data.message)
        }
    }

    const updateOrderHandler = (orderId) => {
        console.log(orderId)
        const formData = new FormData();
        formData.set('status', status);
        updateOrder(id, formData)
    }
  return (
    <Fragment>
      <section className="flex h-screen">
    <Header className="fixed-header" />
    <section className="overflow-y-scroll w-full">
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <div className="flex justify-center h-screen w-full bg-white py-10">
              <div className="order-details  ">
              <div className="text-center">
                  <h1 className="font-bold text-3xl text-black">Order Items</h1>
                </div>
                <h1 className="my-5 text-black">Order # {order.orderId}</h1>

                <div className="flex items-center my-4">
                  <h4 className="text-black">Order Status:</h4>
                  <p
                    className={`ml-2 ${
                      order.items &&
                      (order.items.some(
                        (item) => item.orderStatus === "Processing"
                      )
                        ? "text-blue-600"
                        : order.items.some(
                            (item) => item.orderStatus === "Shipped"
                          )
                        ? "text-yellow-500"
                        : "text-green-600")
                    }`}
                  >
                    <b>
                      {order.items &&
                        (order.items.some(
                          (item) => item.orderStatus === "Processing"
                        )
                          ? "Processing"
                          : order.items.some(
                              (item) => item.orderStatus === "Shipped"
                            )
                          ? "Shipped"
                          : "Delivered")}
                    </b>
                  </p>
                </div>

                {/* <h4 className="my-4 border-t-2 border-gray text-black">
        
                </h4> */}

                <div className="cart-item my-1">
                  {order.items &&
                    order.items.map((item) => (
                      <div
                        key={item.product}
                        className="flex border-b-2 border-gray mb-4 pb-4"
                      >
                        <div className="w-1/4 ">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full "
                          />
                        </div>
                        <div className="pl-4 flex flex-col">
                          <div className="flex items-center">
                            <h1 className="font-bold text-black">Name:</h1>
                            <p className="text-lg text-black">
                              {item.productName}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <h1 className="font-bold text-black">Quantity:</h1>
                            <p className="text-lg text-black">
                              {item.quantity} 
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="flex items-center space-x-4">
                  <h4 className="my-4 text-black">Status: </h4>
                  <div className="form-group">
                    <select
                      className="form-control bg-white"
                      name="status"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                  style={{
                    backgroundColor: "#F8FFA2",
                    color: "#000",
                    transition: "background-color 0.3s ease", // Add a smooth transition effect
                  }}
                    className="font-semibold py-3 text-sm uppercase w-full"
                    onClick={() => updateOrderHandler(order._id)}
                    onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#EFB745")
                      } // Change the hover color
                      onMouseOut={(e) => (e.target.style.backgroundColor = "#F8FFA2")} // Change back to the original color
                  >
                    Update Status
                  </button>
                </div>
              </div>
            </div>
          </Fragment>
        )}
 
    </section>
  </section>
    </Fragment>
  );
};

export default OrderDetails;
