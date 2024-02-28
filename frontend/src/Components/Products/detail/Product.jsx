import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ products }) => {
  console.log(products);

  const productList = Array.isArray(products?.product) ? products.product : [];

  return (
    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {productList.map(product => (
        <li key={product._id}>
          <a href="#" className="group block overflow-hidden">
            <img
              src={product.images[0].url} 
              className="h-72 w-72 px-3 w-full object-cover transition duration-500 group-hover:scale-105"
            />
              <div className="relative pt-3 bg-white">
                    <h5 className="text-xs ml-3 text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        <a href="">{product.name}</a>
                    </h5>
                    <Link to={`/product/${product._id}`} id="view_btn" > <button className=" ml-3 mt-2 border border-black inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-black  hover:text-white focus:relative ">View Details</button></Link>
                </div>
                </a>
        </li>
      ))}
    </ul>
  );
};

export default Product