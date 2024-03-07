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
              <h2 className="font-semibold text-2xl">
                {" "}
                {cartProducts.reduce(
                  (totalQty, item) => totalQty + item.quantity,
                  0
                )}{" "}
                Items
              </h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
            </div>
            {cartProducts.map((item) => (
              <div
                className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                key={item.product}
              >
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img className="h-24" src={item.image} alt="" />
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
                <div className="stockCounter flex items-center gap-2">
                  <button
                    className="w-12 h-12 leading-12 text-black-600 font-bold transition hover:opacity-75"
                    onClick={() => decreaseQty(item.product, item.quantity)}
                  >
                    -
                  </button>

                  <input
                    type="number"
                    className="form-control count h-8 w-16 rounded border-black-200 bg-gray-50 p-0 text-center text-xs text-black-600 font-bold focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    value={item.quantity}
                    readOnly
                  />

                  <button
                    className="w-12 h-12 leading-12 text-black-600 font-bold transition hover:opacity-100"
                    onClick={() =>
                      increaseQty(item.product, item.quantity, item.stock)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <div className="border-t mt-8">
              <button
                style={{
                  backgroundColor: "#F8FFA2",
                  color: "#000",
                  transition: "background-color 0.3s ease", // Add a smooth transition effect
                }}
                className="font-semibold py-3 text-sm uppercase w-full"
                onClick={checkoutHandler}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#EFB745")
                } // Change the hover color
                onMouseOut={(e) => (e.target.style.backgroundColor = "#F8FFA2")} // Change back to the original color
              >
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
