import React, { Fragment, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import Loader from "../../Layout/Loader";
import MetaData from "../../Layout/MetaData";
import ReactGall from "react-image-gallery";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUser, getToken } from "../../../Utilitys/helpers";
import "@fortawesome/fontawesome-free/css/all.css";
import Rating from "react-rating";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "../../Layout/Header";
import "./product.css";
Modal.setAppElement("#root");

const ProductDetails = ({ cartProducts, addCart }) => {
  console.log(cartProducts);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [user, setUser] = useState(getUser());
  const [isModalOpen, setIsModalOpen] = useState(false);
  let { id } = useParams();
  let navigate = useNavigate();

  const productDetails = async (id) => {
    let link = `http://localhost:4000/api/v1/product/${id}`;
    try {
      let res = await axios.get(link);
      setProduct(res.data.product);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError("Product not found");
      setLoading(false);
    }
  };

  console.log(product);
  const increaseQty = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = async () => {
    await addCart(id, quantity);
  };

  const renderCustomImage = (item) => {
    return (
      <div className="gallery-image">
        <img
          src={item.original}
          alt={item.originalAlt}
          className="img-fluid rounded w-72 mx-auto"
          style={{
            width: "500px", // Set your desired width
            height: "300px", // Set your desired height
            objectFit: "cover", // Ensure the thumbnail covers the entire container
          }}
        />
      </div>
    );
  };

  const renderCustomThumb = (item) => {
    return (
      <div className="gallery-thumbnail">
        <img
          src={item.thumbnail}
          alt={item.thumbnailAlt}
          className="img-fluid rounded w-16 h-16 mt-2 object-cover"
          style={{
            width: "90px", // Set your desired width
            height: "80px", // Set your desired height
            objectFit: "cover", // Ensure the thumbnail covers the entire container
          }}
        />
      </div>
    );
  };

  let thumb;
  if (product && product.images && product.images.length > 0) {
    thumb = product.images.map((image) => ({
      original: image.url,
      thumbnail: image.url,
    }));
  } else {
    thumb = [
      {
        original: "/images/NoImage.jpeg",
        thumbnail: "/images/NoImage.jpeg",
      },
    ];
  }

  useEffect(() => {
    productDetails(id);

    if (error) {
      toast.error(error, {
        position: "top-right",
      });
    }
  }, [id, error]);

  if (cartProducts !== undefined) {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  } else {
    console.error("cartProducts is undefined");
  }

  return (
    <Fragment>
      <div className="flex  h-screen">
        <Header />
        <section className="flex bg-white min-h-screen w-full overflow-x-hidden">
          {loading ? (
            <Loader />
          ) : (
            <Fragment>
              <MetaData title={product.name} />
              <div className="bg-white" style={{ padding: '90px' }}>
                <section
                  className="container flex-grow mx-auto max-w-[1200px] lg:grid lg:grid-cols-2 lg:py-10 mb-8"
                  style={{ marginBottom: "20px" }}
                  id="product_image"
                >
                  <div className="container mx-auto px-4">
                    <ReactGall
                      showBullets={false}
                      showFullscreenButton={false}
                      showPlayButton={false}
                      showNav={false}
                      renderItem={renderCustomImage}
                      renderThumbInner={renderCustomThumb}
                      items={thumb}
                    />
                  </div>
                  <div className="mx-auto px-5 lg:px-5 mt-4">
                    <div
                      className="pt-3 text-2xl  lg:pt-0"
                      style={{ padding: "40px" }}
                    >
                      <h3 className="text-3xl text-center font-bold">
                        {product.name}
                      </h3>
                      {/* <h3 className="text-3xl font-bold text-center text-black">{product.name}</h3> */}

                      <p id="product_id" className="text-black text-1xl">
                        <b>Product # </b> {product._id}
                      </p>

                      <section>
                        <section className="py-4">
                          <div className="flex flex-row items-center justify-center stockCounter">
                            <button
                              className="minus h-8 w-8 mx-2 cursor-pointer items-center justify-center border-2 border-red-400 bg-red-400 duration-100 text-black hover:bg-red-600 hover:border-2 hover:border-red-600"
                              onClick={decreaseQty}
                            >
                              -
                            </button>
                            <input
                              type="number"
                              className="count bg-white h-8 w-10 cursor-text items-center justify-center active:ring-gray-500"
                              value={quantity}
                              readOnly
                            />
                            <button
                              className="plus h-8 w-8 mx-2 cursor-pointer items-center justify-center border-2 border-green-400 bg-green-400 duration-100 text-black hover:bg-green-600 hover:border-2 hover:border-green-600"
                              onClick={increaseQty}
                            >
                              +
                            </button>
                          </div>
                        </section>
                      </section>
                      <p className="pt-5 text-sm leading-5 text-black">
                        Status:{" "}
                        <span
                          id="stock_status"
                          className={
                            product.stock > 0
                              ? "text-green-600"
                              : "text-red-600"
                          }
                        >
                          {product.stock > 0
                            ? `In Stock (${product.stock} available)`
                            : "Out of Stock"}
                        </span>
                      </p>

                      <p className="pt-5 text-sm leading-5 text-black-500">
                        Description:{product.description}
                      </p>
                      <hr className="my-4" />
                      <div className="flex justify-center">
                        <button
                          style={{
                            backgroundColor: "#F8FFA2",
                            color: "#000",
                            transition: "background-color 0.3s ease", // Add a smooth transition effect
                          }}
                          type="button"
                          id="cart_btn"
                          className="flex h-12 w-1/3 items-center justify-center rounded-lg bg-black px-5 py-3 text-sm font-bold text-white hover:bg-white hover:text-black border-0"
                          disabled={(product.stock ?? 0) === 0}
                          onClick={addToCart}
                          onMouseOver={(e) =>
                            (e.target.style.backgroundColor = "#EFB745")
                          } // Change the hover color
                          onMouseOut={(e) =>
                            (e.target.style.backgroundColor = "#F8FFA2")
                          } // Change back to the original color
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </Fragment>
          )}
        </section>
      </div>
    </Fragment>
  );
};
export default ProductDetails;
