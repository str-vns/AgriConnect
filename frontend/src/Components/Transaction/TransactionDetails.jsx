import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import MetaData from "../Layout/MetaData";
import Loader from "../Layout/Loader";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getToken } from "../../Utilitys/helpers";
import Header from "../Layout/Header";

const OrderDetails = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [order, setOrder] = useState({});
  let { id } = useParams();

  const getOrderDetails = async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getToken()}`,
        },
      };

      const { data } = await axios.get(
        `http://localhost:4000/api/v1/OrderProcess/${id}`,
        config
      );
      setOrder(data);
      console.log(data);
      console.log(data.items);
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  useEffect(() => {
    getOrderDetails(id);

    if (error) {
      toast.error(error, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  }, [error, id]);

  const updateOrderHandler = (id) => {
    const formData = new FormData();
    formData.set("status", status);
    // updateOrder(id, formData)
  };
  return (
    <Fragment>
      <MetaData title={"Order Details"} />
      <div className="flex bg-yellow-200 h-screen">
        <div className=" ">
          <Header />
        </div>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <div className="flex justify-center w-full bg-white py-10">
              <div className="order-details border-2 border-black p-10">
                <div className="text-center">
                  <h1 className="font-bold text-3xl text-black">Order Items</h1>
                </div>
                <h1 className="my-5 text-black ">Order # {order.orderId}</h1>

                <div className="flex items-center my-4">
                  <h4 className="font-bold text-black">Order Status:</h4>

                  <p
                    className={`ml-2 ${
                      order.items &&
                      order.items.some(
                        (item) => item.orderStatus === "Processing"
                      )
                        ? "text-blue-600"
                        : "text-green-600"
                    }`}
                  >
                    <b>
                      {order.items &&
                      order.items.some(
                        (item) => item.orderStatus === "Processing"
                      )
                        ? "Processing"
                        : "Delivered"}
                    </b>
                  </p>
                </div>

                <div className="cart-item my-1">
                  {order.items &&
                    order.items.map((item) => (
                      <div
                        key={item.product}
                        className="flex border-b-2 border-gray mb-4 pb-4"
                      >
                        <div className="w-1/4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full"
                          />
                        </div>

                        <div className="pl-4 flex flex-col">
                          <div className="flex items-center">
                            <h1 className="font-bold text-black">Name:</h1>
                            <p className="text-lg text-black">
                              {item.productName} Piece(s)
                            </p>
                          </div>
                          <div className="flex items-center">
                            <h1 className="font-bold text-black">Quantity:</h1>
                            <p className="text-lg text-black">
                              {item.quantity} Piece(s)
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="flex items-center justify-center space-x-4 ">
                  <h4 className="my-5 text-black font-bold">Status: </h4>
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
                    className="btn inline-block my-2 rounded-lg bg-yellow-200 py-3 w-[150px] text-sm font-medium text-black hover:bg-white hover:text-black hover:border-black border-2 font-bold"
                    onClick={() => updateOrderHandler(order._id)}
                  >
                    Update Status
                  </button>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default OrderDetails;
