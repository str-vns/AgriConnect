import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../Layout/MetaData";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../Layout/Header";

function Carts({ addCart, cartProducts, removeCart }) {
  const navigate = useNavigate();
  console.log(cartProducts);
  const increaseQty = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (newQty > stock) return;
    addCart(id, newQty);
  };

  const decreaseQty = (id, quantity) => {
    const newQty = quantity - 1;
    if (newQty <= 0) return;
    addCart(id, newQty);
  };

  const removeCartItemHandler = (id) => {
    removeCart(id);
  };
  const checkoutHandler = () => {
    navigate("/login?redirect=confirm");
  };
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

  return (
    <Fragment>
    <div className="flex justify-start items-center bg-white h-screen">
      <div className="bg-white">
        <Header />
      </div>
      <div className="lg:grid flex flex-grow overflow-y-scroll justify-center items-center lg:min-h-screen"></div>
      <div className="container mt-10 mx-auto">
        <div className="w-full bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cartProducts.length} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Quantity
            </h3>
            {/* <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Price
            </h3> */}
            {/* <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3> */}
          </div>
          {cartProducts.map((item) => (
            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={item.product}>
              <div className="flex w-2/5">
                <div className="w-20">
                  <img
                    className="h-24"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-sm">{item.name}</span>
                  <span className="text-red-500 text-xs">{item.brand}</span>
                  <a
                    href="#"
                    className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                    onClick={() => removeCartItemHandler(item.product)}
                  >
                    Remove
                  </a>
                </div>
              </div>
              <div className="flex justify-center w-1/5">
                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33-32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
                <input
                  className="mx-2 border text-center w-8"
                  type="text"
                  value={item.quantity}
                  readOnly
                />
                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </div>
              {/* <span className="text-center w-1/5 font-semibold text-sm">${item.price}</span>
              <span className="text-center w-1/5 font-semibold text-sm">${item.total}</span> */}
            </div>
          ))}
          <div className="border-t mt-8">
            {/* <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>${cartProducts.reduce((acc, item) => acc + item.total, 0)}</span>
            </div> */}
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" onClick={checkoutHandler}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
  );
}

export default Carts;
