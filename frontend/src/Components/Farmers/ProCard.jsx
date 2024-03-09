import React, { useEffect, useState } from 'react';
import './ProdStyle.css';
import axios from 'axios';
import { getToken, logout } from "../../Utilitys/helpers";
import Loader from "../Layout/Loader";

const ProductCard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [allSrp, setAllSrp] = useState([]);
  const [isDeleted, setIsDeleted] = useState("");

  const listFarmers = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    };
    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/v1/srp/show`,
        config
      );
      console.log(data)
      setAllSrp(data.srpProducts);
      console.log(data.srpProducts)
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      console.log(error);
    }
  };

console.log(allSrp)
  useEffect(() => {
    listFarmers();   
  }, []);

  return (
    <>
    <section className="flex h-screen">
      
  
    <section className="overflow-y-scroll w-full">
  {/* <h1 className="main-heading">All Products</h1> */}
  <h6 className="main-heading ml-20 text-black text-center font-bold">SRP of Products</h6>

  {allSrp && allSrp.length > 0 ? (
    <div className="product-container">
      {allSrp.map((Srpy, index) => (
        <div key={index} className="product-card">
          {Srpy.images && Srpy.images.length > 0 ? (
            <img
              src={Srpy.images[0].url}
              alt={Srpy.name}
              className="square-image" // Add this class for square images
            />
          ) : (
            <img
              src="/images/NoImage.jpeg"
              alt="No Image Available"
              className="square-image" // Add this class for square images
            />
          )}

          <h4>{Srpy.name}</h4>
          <div>
            <span>₱{Srpy.price} /Kg</span>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p>No SRP products available</p>
  )}
</section>


    
</section>
  </>
  
  
  );
};

export default ProductCard;
