import React, { Fragment, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MetaData from '../Layout/MetaData'
import { getUser, getToken } from '../../Utilitys/helpers'
import axios from 'axios'
import { toast } from 'react-toastify'
import Header from '../Layout/Header'
function ConfirmOrder({cartProducts}) {
  const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(getUser() ? getUser() : {})
    const [locations, setLocations] = useState([]);
    let navigate = useNavigate();
    const itemsPrice = cartProducts.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const shippingPrice = itemsPrice > 200 ? 0 : 25
    const taxPrice = Number((0.05 * itemsPrice).toFixed(2))
    const totalPrice = (itemsPrice + shippingPrice + taxPrice).toFixed(2)
    
    console.log(cartProducts)

    const order = {
      orderItems: cartProducts,
    };

    const createOrder = async (order) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
          },
        };
        const { data } = await axios.post(
          `http://localhost:4000/api/v1/transaction`,
          order,
          config
        );
        setLoading(false);
        toast.success("Order created", {
          position: "top-right",
        });
  
        localStorage.removeItem("cartProducts");
        navigate("/");
        window.location.reload();
      } catch (error) {
        const message = error.response ? error.response.data.message : "An error occurred. Please try again.";
        console.log(error)
        toast.error(message, {
          position: "top-right",
        });
      }
    };

    const submitHandler =  async () =>
    {
      createOrder(order)
    }
        return (
          <Fragment>
            <MetaData title={'Confirm Order'} />
            <div className="justify-center bg-white items-center h-screen">
          <div className="bg-white  flex">
            <Header />
            <div className="  w-full ">
            
              <div className="flex flex-col items-center bg-white">
                
                <div className="w-screen max-w-lg space-y-4">
                  <div className="col-12 col-lg-7 order-details">
                    <h4 className="mb-4 text-black mt-10">Confirm Order</h4>
                    {user && <p className='text-black'><b>Name:</b> {user.name}</p>}
                  
      
                    <h4 className="my-4 text-black">Order Items:</h4>
      
                    <div className="cart-item my-1 border-b-2 border-black">
                      {cartProducts.map(item => (
                        <Fragment key={item.product}>
                          <div key={item.product} className="row my-5">
                          <div className="mt-8 ">
              <ul className="space-y-4">
                <li className="flex items-center justify-between gap-4">
                  <img src={item.image} className="h-16 w-16 rounded object-cover" />

                  <div>
                    <div className="text-sm text-gray-900">
                      <Link to={`/products/${item.product}`}>{item.name}</Link>
                    </div>

                    <div className="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <p id="card_item_price">${item.price}</p>
                    </div>
                  </div>

                  <div className="flex flex-1 items-center justify-end gap-2">
                    <div className="stockCounter flex items-center gap-2">
                    <p className='text-black text-sm'>{item.quantity} x ${item.price} = <b>${(item.quantity * item.price).toFixed(2)}</b></p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
                            
                          </div>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </div>
                <div className=" flex justify-end border-t border-gray-100 pt-8">
          <div className="w-screen max-w-lg space-y-4 ">
               
      

            
              <div className="flex justify-end  border-black ">
                <button onClick={submitHandler} type="submit" className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600" >
                  Update Status
                </button>
                </div>
          </div>
          </div>
         
              </div>
            </div>
            </div>
            </div>
          </Fragment>
        );
      };
      
 

export default ConfirmOrder