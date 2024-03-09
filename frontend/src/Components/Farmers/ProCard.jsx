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
      <h1 class="main-heading">All Products</h1>
      {allSrp && allSrp.length > 0 ? (
        allSrp.map(Srpy => (
    <div className="product-container">
      <div className="product-card">
      {Srpy.images && Srpy.images.length > 0 ? (
  <img
    src={Srpy.images[0].url} 
    className=""
  />
) : (
  <img
    src="/images/NoImage.jpeg" 
    alt="No Image Available"
    className=""
  />
)}
        

        <h4>{Srpy.name}</h4>
        <div>
          <span>₱{Srpy.price} /Kg</span>
        </div>
      </div>
     
    </div>
    ))
   ) : (
    <p>No SRP products available</p>
  )}  
    </section>
    
</section>
  </>
  
  
  );
};

export default ProductCard;
