import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MetaData from "../Layout/MetaData";
import { getUser, getToken } from "../../Utilitys/helpers";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "../Layout/Header";
import "./confirm.css";

function ConfirmOrder({ cartProducts }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(getUser() ? getUser() : {});
  const [locations, setLocations] = useState([]);
  let navigate = useNavigate();
  const itemsPrice = cartProducts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingPrice = itemsPrice > 200 ? 0 : 25;
  const taxPrice = Number((0.05 * itemsPrice).toFixed(2));
  const totalPrice = (itemsPrice + shippingPrice + taxPrice).toFixed(2);

  console.log(cartProducts);

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
      const message = error.response
        ? error.response.data.message
        : "An error occurred. Please try again.";
      console.log(error);
      toast.error(message, {
        position: "top-right",
      });
    }
  };

  const submitHandler = async () => {
    createOrder(order);
  };
  return (
    <Fragment>

         <section className="flex h-screen">
    <Header className="fixed-header" />
    <section className="overflow-y-scroll w-full mt-0">

        <div className="lg:grid lg:grid-cols-12 lg:gap-4 flex-grow overflow-y-scroll justify-center items-center lg:min-h-screen">
          <div className="wrapperO">
          <h1 className="confirm-order-heading" style={{ paddingTop: '100px'}}>
  Confirm Order Form
</h1>

            <div className="group">
              <table>
                <tbody>
                  {cartProducts.map((item) => (
                    <tr key={item.product}>
                      <td className="item-img">
                        <img src={item.image} alt={item.name} />
                      </td>
                      <td className="item-details">
                        <span className="item-title">
                          <b>Name:</b> {item.name}
                        </span>
                        <span className="item-qty" style={{ color: "black" }}>
                          Quantity: {item.quantity}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
      
            <div className="group">
              <button
                className="buttonO"
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#EFB745")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#F8FFA2")}
                onClick={submitHandler}
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
        </section>
    </section>
    </Fragment>
  );
}

export default ConfirmOrder;
