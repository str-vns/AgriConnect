import React from 'react';
import './ProdStyle.css';
import Header from '../Layout/Header';


const ProductCard = () => {
  return (
    <>
    <section className="flex h-screen">
      
      <Header />
      <section className="overflow-y-scroll w-full"> 
      <h1 class="main-heading">All Products</h1>

    <div className="product-container">
      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <h4>Product Name</h4>
        <div>
          <span>$299</span>
        </div>
      </div>
      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h4>Product Name</h4>
        <div>
          <span>$299</span>
        </div>
      </div>
      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h4>Product Name</h4>
        <div>
          <span>$299</span>
        </div>
      </div>
    </div>
    <div className="product-container">
      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h4>Product Name</h4>
        <div>
          <span>$299</span>
        </div>
      </div>
      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h4>Product Name</h4>
        <div>
          <span>$299</span>
        </div>
      </div>
      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h4>Product Name</h4>
        <div>
          <span>$299</span>
        </div>
      </div>
    </div>
    </section>
</section>
  </>
  
  
  );
};

export default ProductCard;
